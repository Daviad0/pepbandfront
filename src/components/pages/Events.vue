<script setup>
</script>

<style>
@import '../../assets/events.css';
</style>

<template>
    <div class="mainbodyoutside flex center">
        <div class="mainbody">
          <div class="splitpage">
              <div class="content-left">
                  <div class="flex center">
                      <span class="large spacing">All Events</span>
                      <!-- <% if(permissions.includes("events") || permissions.includes("events_edit")) { %>
                          <button class="button-main" onclick="window.location = '/event/create'"><span class="button-text">Create Event</span></button>
                      <% } %> -->
                  </div>
                  
                  <span class="small spacing">Here are all of the upcoming Pep Band events! You can attend any events as a Michigan Tech student, but fans of the Huskies can attend at a small price!</span>
                  <div class="flex center wrap">
                      <!-- <% events.forEach(function(e){ %>
                          <% let applicableEventType = eventTypes.find(et => et.etyid == e.etyid); %>
                          <% if(applicableEventType == null) { %>
                              <% applicableEventType = defaultEventType; %>
                          <% } %>
                          <%- include('./partials/event/event_basic.ejs', {event: e, eventType: applicableEventType, canEdit: permissions.includes("events_edit")}); %>
                      <% }); %>
                      <% if(events.length == 0) { %>
                          <%- include('partials/empty.ejs', {filters: false, message: "No upcoming events available!"}) %>
                      <% } %> -->
                  </div>
                  
              </div>
              <div class="content-right">
                  <div class="flex center">
                      <span class="large spacing">Announcements</span>
                      <!-- <% if(permissions.includes("announcements") || permissions.includes("announcements_edit")) { %>
                          <button class="button-main"><span class="button-text">Add Announcement</span></button>
                      <% } %> -->
                      
                      
                      
                  </div>
                  <div class="announcements spacing-top">
                      <!-- <%- include('./partials/config/all_announcements.ejs', {announcements: announcements, canEdit: permissions.includes("announcements_edit")}); %>
                      <% if(announcements.length == 0) { %>
                          <%- include('partials/empty.ejs', {filters: false, message: "No current announcements!"}) %>
                      <% } %> -->
                  </div>
                  
                  
              </div>
          </div>
        </div>
        
    </div>
</template>