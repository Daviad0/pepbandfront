<script setup>
</script>

<style>
@import '../../assets/event.css';
</style>

<template>
    <div class="mainbodyoutside flex center">
        <div class="mainbody">
            <div class="splitpage">
                <div class="content-left">
                    <div class="flex center">

                    </div>
                    <div class="event flex flex-column apart start" style="background: red">
                        <div class="flex apart event-header">
                            <div class="flex center">
                                <span class="xlarge material-symbols-rounded"><%= event.icon %></span>
                                <!-- <% if(relativeState == "past"){ %> -->
                                    <div class="flex center">
                                        <span class="small"><i>Event Over</i></span>
                                    </div>
                                <!-- <% } %> -->
                                <!-- <% if(relativeState == "current"){ %> -->
                                    <div class="flex center">
                                        <span class="small"><i>Event NOW!</i></span>
                                    </div>
                                <!-- <% } %> -->
                            </div>
                            <!-- <% if(permissions.includes("events_edit")) { %>
                                <div class="flex center">
                                    <button class="button-main white-bg" onclick="window.location = '/event/<%= event.eid %>/edit'"><span class="button-text" style="color: <%= event.color %>">Edit Event</span></button>
                                    <button class="button-main white-bg" onclick="<%= event.show ? 'hideEvent()' : 'showEvent()' %>"><span class="button-text" style="color: <%= event.color %>"><%= event.show ? 'Hide' : 'Show' %> Event</span></button>
                                </div>
                            <% } %> -->
                        </div>
                        
                        <div class="flex apart">
                            <div>
                                <div class="flex apart">
                                    <div class="flex center">
                                        <span class="small material-symbols-rounded">my_location</span>
                                        <!-- <% if(event.location == null){ %> -->
                                            <span class="small"><i>No Set Location</i></span>
                                        <!-- <% } else { %> -->
                                            <span class="small"><%= event.location %></span>
                                        <!-- <% } %> -->
                                    </div>
                                    
                                </div>
                                <div class="flex apart">
                                    <div class="flex center">
                                        <span class="small material-symbols-rounded">schedule</span>
                                        <!-- <% if(relativeState == "current"){ %> -->
                                            <span class="small">Ending <%= formattedEnd %></span>
                                        <!-- <% } else { %> -->
                                            <span class="small"><%= formattedStart %></span>
                                        <!-- <% } %> -->
                                    </div>
                                    
                                </div>
                                
                                <!-- <span class="xlarge<%= relativeState == "past" ? ' event-passed' : '' %>"><%= event.name %></span> -->
                            </div>
                            

                            
                        </div>
                    </div>

                    <div class="slot-list spacing-bottom spacing-top">
                        <span class="small"><%= event.description %></span>
                    </div>

                    <div class="segment-list">
                        <!-- <% let parsedData = JSON.parse(event.data) %>
                        <% if(!parsedData.segments) parsedData.segments = [] %>
                        <% for(let i = 0; i < parsedData.segments.length; i++) { %>
                            <% let segment = parsedData.segments[i] %>
                            <% segment.number = i + 1 %>
                            <%- include('./partials/event/segment_view.ejs', {segment: segment}) %>
                        <% } %> -->
                    </div>
                    
                </div>
                <div class="content-right">
                    <!-- <% if(user != null && permissions.includes("events_attendance")) { %> -->
                        <div class="user-attending">
                            <div class="flex center">
                                <span class="large spacing">You're Attending?</span>
                            </div>
                            <div class="spacing floating-box">
                                <div class="spacing">
                                    <span class="small">Are you able to attend this event? By signing up, you'll receive set list notifications and announcements!</span>
                                    <span class="tiny"><i>By default, <strong>you're <%= event.defaultParticipation ? "participating" : "not participating" %></strong></i></span>
                                </div>
                                
                               
                                
                                <!-- <div class="spacing flex center">
                                    <button onclick="changeParticipationOverride(this)" data-override="1" class="override button-alternate <%= override == 1 ? 'success-bg' : '' %>"><span class="button-text">Yes</span></button>
                                    <button onclick="changeParticipationOverride(this)" data-override="2" class="override button-alternate <%= override == 2 ? 'warning-bg' : '' %>"><span class="button-text">Maybe</span></button>
                                    <button onclick="changeParticipationOverride(this)" data-override="0" class="override button-alternate <%= override == 0 ? 'error-bg' : '' %>"><span class="button-text">No</span></button>
                                </div>

                                <div class="spacing-bottom flex center">
                                    <button onclick="removeParticipationOverride()" class="reset_override button-alternate tiny <%= override == undefined ? 'no-display' : '' %> "><span class="button-text tiny">Reset Override</span></button>
                                </div> -->
                                

                            </div>
                        </div>
                        
                    <!-- <% } %> -->
                    <div>
                        <span class="large spacing">Attending Groups</span>
                        <div>
                            <!-- <% for(let i = 0; i < groups.length; i++) { %>
                                <%- include('./partials/event/event_group.ejs', {group: groups[i]}) %>
                            <% } %> -->
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        
    </div>
</template>