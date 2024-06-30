import { reactive, watch } from 'vue';

// defines all properties that should be maintained within local storage
// ALL local_storage properties should be a JSON object
let _local_storage = ['user_profile', 'page_visible'];

export const store = reactive({

    _initialize(){
        _local_storage.forEach((prop) => {

            let prev_value = localStorage.getItem(prop);
            if(prev_value != null){
                this[prop] = JSON.parse(prev_value);
            }

            watch(this[prop], (new_val) => {

                new_val = JSON.stringify(new_val);

                localStorage.setItem(prop, new_val);
            });
        });
        
    },

    config: {
        api_url: "http://pep.mtu.edu"
    },

    _config_update(config_key, data){
        this.config[config_key] = data;
    },


    user_profile: {
        sso_auth: false,
        user_data: null,
        view: 'user'
    },
    /**
     * Assigns the user_profile to a specific setup (including full_name, uid, and ldap)
     * @param {*} full_name - the name to assign
     * @param {*} uid - the uid to use
     * @param {*} ldap - the ldap 
     */
    _user_profile_update(full_name, uid, role, rid){
        this.user_profile.sso_auth = true;
        this.user_profile.user_data = {
            full_name: full_name, // String
            uid: uid, // String (djreeves)
            role: role, // Object
            rid: rid
        }
    },

    _view_update(view){
        this.user_profile.view = view;
    },

    _user_profile_logout(){
        this.user_profile.sso_auth = false;
        this.user_profile.user_data = null;
        this.user_profile.view = 'user';
    },

    page_visible: {
        name: 'home',
        swapped: new Date(),
        expanded: false,
        data: null,
        page_refresh: 0
    },

    

    /**
     * Assigns the new page if it is different from the current one
     * @param {*} new_page 
     */
    _page_visible_update(page, expanded, data){
        let new_page = page;
        let expanded_status = expanded;
        let page_data = data;
        
        if(new_page != null && this.page_visible.name != new_page){
            this.page_visible.data = page_data;
            this.page_visible.swapped = new Date();
            this.page_visible.name = new_page;
        }
        if(expanded_status != null){
            this.page_visible.expanded = expanded_status;
        }
        
    },

    _page_refresh(){
        this.page_visible.page_refresh += 1;
    },

    overlay: {
        visible: true,
        page: null,
        error: false
    },

    overlay_content: {
        initial_data: null,
        current_data: {}
    },

    _overlay_error(){
        this.overlay.error = true;
    },

    _overlay_update(visible, page, data){
        let new_visible = visible;
        let new_page = page;
        let initial_data = data;

        this.overlay.error = false;

        if(new_page != null){
            this.overlay.page = new_page;
        }else{
            this.overlay.page = "Empty";
        }

        if(new_visible != null){
            this.overlay.visible = new_visible;
        }

        if(initial_data != null){
            this.overlay_content.initial_data = initial_data;
        }
    },

    _overlay_content_update(data){
        let new_data = data;

        if(new_data != null){
            this.overlay_content.current_data = new_data;
        }
    }




});