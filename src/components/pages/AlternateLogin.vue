<script setup>
import Sprawl from '../content/Sprawl.vue';
</script>

<style>
/* @import '../../assets/index.css'; */
@import '../../assets/login.css';
</style>

<template>
    <div class="mainbodyoutside flex center">
        <div class="mainbody">
          <Sprawl/>
          <div class="grayportion">

          </div>
          <div class="center-content">
              <div class="spacing content-heading">
                  <span class="large on-background">Let's Get Into An Account</span>
                  <div class="flex center spacing">
                      <button class="button-main white-bg" onclick="window.location = '/account/authenticate'"><span class="button-text" style="color: #000">Login with Michigan Tech</span></button>
                  </div>
              </div>
              <div class="splitpage">
                  <div class="content-left floating-box form-box">
                      <div>
                          <span class="large spacing">Login with Existing Account</span>
                      </div>
                      <div class="form">
                          <div class="flex center">
                              <div class="login-detail-item">
                                  <div class="flex apart">
                                      <span class="tiny login-detail-tag">Username (Email)</span>
                                  </div>
                                  <div class="flex apart">
                                      <input name="login_email" type="text" class="input login-detail-value" placeholder="john.doe@gmail.com"/>
                                  </div>
                              </div>
                          </div>
                          <div class="flex center">
                              <div class="login-detail-item">
                                  <div class="flex apart">
                                      <span class="tiny login-detail-tag">Password</span>
                                  </div>
                                  <div class="flex apart">
                                      <input name="login_password" type="password" class="input login-detail-value" placeholder="CatsRBetter"/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="flex center">
                          <button class="button-main" onclick="tryLogin()"><span class="button-text">Attempt to Login</span></button>
                      </div>
                      <div class="flex center">
                          <span class="small no-display error error-message" name="error" id="login-error"></span>
                      </div>
                  </div>
                  <div class="content-right floating-box form-box">
                      <div>
                          <span class="large spacing">Create New Account</span>
                      </div>
                      <div class="form">
                          <div class="flex center">
                              <div class="login-detail-item">
                                  <div class="flex apart">
                                      <span class="tiny login-detail-tag">Email</span>
                                  </div>
                                  <div class="flex apart">
                                      <input name="create_email" type="text" class="input login-detail-value" placeholder="john.doe@gmail.com"/>
                                  </div>
                              </div>
                              <div class="login-detail-item">
                                  <div class="flex apart">
                                      <span class="tiny login-detail-tag">Full Name</span>
                                  </div>
                                  <div class="flex apart">
                                      <input name="create_full_name" type="text" class="input login-detail-value" placeholder="John Doe"/>
                                  </div>
                              </div>
                          </div>
                          <div class="flex center">
                              <div class="login-detail-item">
                                  <div class="flex apart">
                                      <span class="tiny login-detail-tag">Password</span>
                                  </div>
                                  <div class="flex apart">
                                      <input name="create_password" type="password" class="input login-detail-value" placeholder="DogsRWorse"/>
                                  </div>
                              </div>
                              <div class="login-detail-item">
                                  <div class="flex apart">
                                      <span class="tiny login-detail-tag">Confirm Password</span>
                                  </div>
                                  <div class="flex apart">
                                      <input name="create_confirm" type="password" class="input login-detail-value" placeholder="DogsRWorse"/>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="flex center">
                          <button class="button-main" onclick="tryCreate()"><span class="button-text">Create Account</span></button>
                      </div>
                      <div class="flex center">
                          <span class="small no-display error error-message" name="error" id="create-error"></span>
                      </div>
                      
                  </div>
              </div>
              
          </div>
        </div>
        
    </div>
</template>