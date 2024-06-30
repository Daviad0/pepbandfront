import data_post from './data_post.js';
import { store } from './store.js';

class Overlay{
    constructor(target, title, buttons, handles_cancel, icon){
        this.target = target;
        this.title = title;
        this.buttons = buttons;
        this.handles_cancel = handles_cancel;
        this.icon = icon;
    }
}

const button_methods = {
    cancel(instance, data){
        // data should be {} or have the attribute _modified & _close_warning
        // instance should contain the overlay component

        var run_action = true;

        if(data != null && data._modified == true && data._close_warning != undefined){
            var warning_result = confirm(data._close_warning);
            if(warning_result == false){
                run_action = false;
            }
        }

        if(run_action){
            instance.close_overlay();
        }

    },
    cancel_force(instance){
        instance.close_overlay();
    }
}

const overlays = {
    "Error": new Overlay( // error is a required overlay!
        "ErrorView",
        "An Error Occurred",
        // assume buttons have data and instance parameters passed into the click
        [
            {
                text: "Close Overlay",
                background: "gray",
                click: button_methods.cancel_force,
                enabled: () => {return true}

            }
        ],
        true // this overlay provides a cancel button
    ),
    "PathwaySkillEdit" : new Overlay(
        "PathwaySkillEdit",
        "Edit Skills in Pathway",
        // assume buttons have data and instance parameters passed into the click
        [
            {
                text: "Save Changes",
                background: "secondary",
                click: async (instance, data) => {
                    if(!data._modified) return false;
                    if(!data._validated) return false;


                    // regular data saving

                    let pathway_id = data.pathway_id;
                    let skills = data.skills;
                    let tier = data.tier;
                    let orig_skills = data._orig_skills;

                    let skills_sent = [];

                    for(let si = 0; si < skills.length; si++){
                        let s = skills[si];
                        let orig_skill = orig_skills.find(os => os.skill_id == s.skill_id);

                        skills_sent.push(s.skill_id);

                        // the level property needs to not match for this to be OK
                        if(orig_skill && s.level == orig_skill.level) continue;

                        let send_data_category = {
                            pathway_id: pathway_id,
                            skill_id: s.skill_id,
                            pathway_tier: tier,
                            skill_level: s.level
                        }

                        
                        await data_post.post_pathway_skill(send_data_category);
                        
                        console.log(send_data_category);
                        // await data_post.post_category(send_data_category);
                    }


                    // check for any removed categories
                    for(let osi = 0; osi < orig_skills.length; osi++){
                        let os = orig_skills[osi];

                        if(skills_sent.includes(os.skill_id)) continue;

                        let send_data_skill = {
                            pathway_id: pathway_id,
                            skill_id: os.skill_id,
                            pathway_tier: tier
                        }
                        console.log(send_data_skill);
                        await data_post.delete_pathway_skill(send_data_skill);
                    }

                    

                    // rubrics saving

                    // let rubrics = data.rubrics;
                    // let orig_rubrics = data._orig_rubrics;

                    // let rubric_levels = Object.keys(rubrics);

                    // for(let ri = 0; ri < rubric_levels.length; ri++){
                    //     let r = rubric_levels[ri];
                    //     // rubrics are a dictionary, so get the value from where the key is
                    //     let orig_rubric = orig_rubrics[r];
                    //     let this_rubric = rubrics[r];


                    //     // if the rubric is the same as before, then don't send to API
                    //     if(orig_rubric && JSON.stringify(this_rubric) == JSON.stringify(orig_rubric)) continue;

                    //     let send_data_rubric = {
                    //         level: this_rubric.level,
                    //         content: this_rubric.content,
                    //         long_content: this_rubric.long_content,
                    //         skill_id: this_rubric.skill_id
                    //     }

                        
                        
                        

                    //     await data_post.post_rubric(send_data_rubric);
                    // }

                    instance.store._page_refresh();

                    button_methods.cancel_force(instance);
                },
                enabled: (instance, data) => {
                    if(data == undefined) return false;
                    // if the data was not modified nor successful, then disable
                    if(!data._modified) return false;
                    if(!data._validated) return false;
                    return true;
                }

            },
            {
                text: "Cancel",
                background: "gray",
                click: button_methods.cancel,
                enabled: () => {return true}

            }
        ],
        true // this overlay provides a cancel button

    )
}

export default overlays;