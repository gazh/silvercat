<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=Windows-1250">
    
    <title>Android Uno</title>
    
    <!--CSS-->
    <link href="css/reset.css" rel="stylesheet" type="text/css" />
    <link href="css/css.css" rel="stylesheet" type="text/css" />
    <link href="css/responsive.css" rel="stylesheet" type="text/css" />
    
</head>

<body>
    
    <!-- --- HEADER --- -->
    <div id="header">
        <div class="holder">
        
            <div id="logo">
                <a href="#to-top" class="js-jump"><img src="images/logo.png" width="76" height="76" "alt="logo" /></a>
            </div>
            
            <ul id="navigation">
                <li><a href="#to-contact" class="js-jump">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#to-team" class="js-jump">Team</a></li>
                <li><a href="#to-products" class="js-jump">Products</a></li>
                <li><a href="#to-application" class="js-jump">Application</a></li>
                <li class="clear"></li>
            </ul>
            
            <div class="clear"></div>
        </div>
    </div>
    <!-- END header -->
    
    
    
    <div class=jump>
    <a name="to-top"></a>
    </div>
    
    <!-- --- TITLE --- -->
    <div id="title">
        <div class="holder">
            
            <h1>Remote control your Arduino<br /><span>with a smartphone</span></h1>
            <p>Turn your devices On and Off at the desired moment using timers in our APP<br />
            Always know wich device is active or inactive thanx to the Updater service in our APP</p>
            
            <p>Remote control lights, motors, heaters, etc.</p>
            
            <div class="blocks-holder">
                <a href="#to-application" class="js-jump js-block-toggle">
                <div id="block-diode" class="block">
                    <img src="images/diode.png" alt="diode" />
                </div>
                </a>
                
                <a href="#to-application" class="js-jump js-block-toggle">
                <div id="block-motor" class="block">
                    <img src="images/motor.png" alt="motor" />
                </div>
                </a>
                
                <a href="#to-application" class="js-jump js-block-toggle">
                <div id="block-heater" class="block">
                    <img src="images/heater.png" alt="heater" />
                </div>
                </a>
                
                <div class="clear"></div>
            </div>
            
        </div>
    </div>
    <!-- END title -->
    
    
    
    <div class=jump>
    <a name="to-application"></a>
    </div>
    
    <!-- --- APPLICATION --- -->
    <div id="application">
        <div class="holder">
            
            <h2><span>Application</span></h2>
            
            <!-- application- diode-->
            <div id="application-diode">
                
                <div class="phone-app">
                    <div class="time"></div>
                    <div class="diode-digital">
                        <div class="input-type">Digital</div>
                        <div class="phone-header">Digital Output</div>
                        <div class="tabs">
                            <div class="tab-outputs"></div>
                            <div class="tab-pwm"></div>
                        </div>
                        <div class="phone-row" id="row-switch1"><span>Output 1</span><div class="switch js-switch-diode" id="switch1"></div></div>
                        <div class="phone-row" id="row-switch2"><span>Output 2</span><div class="switch js-switch-diode" id="switch2"></div></div>
                        <div class="phone-row" id="row-switch3"><span>Output 3</span><div class="switch js-switch-diode" id="switch3"></div></div>
                    </div>
                    
                    <div class="diode-analog" style="display: none">
                        <div class="input-type">PWM</div>
                        <div class="phone-header">Digital Output PWM</div>
                        <div class="tabs">
                            <div class="tab-outputs"></div>
                            <div class="tab-pwm"></div>
                        </div>
                        <div class="phone-row" id="light-axis"><div id="light-axis-holder"></div><div id="light-drager"></div></div>
                        <div class="phone-row" id="light"><span>Light sensor:</span><div class="text js-light">0</div></div>
                    </div>
                </div><!-- END phone-app -->
                
                <div class="circuit">
                    <img src="images/circuit-diode.png" alt="circuit" />
                    <div class="diodes" id="diode1"></div>
                    <div class="diodes" id="diode2"></div>
                    <div class="diodes" id="diode3"></div>
                    <div class="diodes" id="diode4"></div>
                </div>
                
                <div class="clear"></div>
            </div><!-- END application-diode -->
            
            
            
            <!-- application-motor -->
            <div id="application-motor" style="display: none">
                
                <div class="phone-app">
                    <div class="time"></div>
                    <div class="input-type">Digital</div>
                    <div class="phone-header">Digital Output</div>
                        <div class="tabs">
                            <div class="tab-motor"></div>
                            <div class="tab-heater"></div>
                        </div>
                        
                        <div class="phone-row" id="switch-motor"><span>El. motor</span><div class="switch js-switch-motor"></div></div>
                    
                </div><!-- END phone-app -->
                
                <div class="circuit">
                    <img src="images/circuit-motor.png" alt="circuit" />
                    <div class="motor-off" id="motor"></div>
                </div>
                
                <div class="clear"></div>  
            </div><!-- END application-motor -->
            
            
            
            <!-- application-heater -->
            <div id="application-heater" style="display: none">
                
                <div class="phone-app">
                    <div class="time"></div>
                    <div class="input-type">Digital</div>
                    <div class="phone-header">Digital Output</div>
                        <div class="tabs">
                            <div class="tab-motor"></div>
                            <div class="tab-heater"></div>
                        </div>
                        
                        <div class="phone-row" id="switch-motor"><span>Heater</span><div class="switch js-switch-heater"></div></div>
                        <div class="phone-row" id="temperature"><span>Temperature: </span><div class="text js-temperature">20°C</div></div>
                    
                </div><!-- END phone-app -->
                
                <div class="circuit">
                    <img src="images/circuit-heater2.png" alt="circuit" />
                    <div class="motor-off" id="heater-motor"></div>
                    <div class="heater-hot" id="heater"></div>
                </div>
                
                <div class="clear"></div>
            </div><!-- END application-heater -->
            
        </div>
    </div>
    <!-- END aplication -->
    
    
    
    <div class=jump>
    <a name="to-products"></a>
    </div>
    
    <!-- --- PRODUCTS --- -->
    <div id="products">
        <div class="holder">
            
            <h2><span>Products</span></h2>
            <div class="holder-inner">
            
                <div class="product">
                    <div class="phone">
                        <img src="images/phone-off.png" alt="Phone Androiduno" />
                    </div><!-- END phone -->
                    
                    <div class="info-box">
                        <h3>Arduino Uno</h3>
                        <p>4 digital input</p>
                        <p>6 analog input</p>
                        <p>10 analog output</p>
                        <p>4 PWM</p>
                        <p>4 Timers</p>
                        <p>Upgrade Service</p>
                        <br />
                        <p>More on <a href=="blog.php">Blog</a></p>
                        <p><a href="code.php">Code</a> for Arduino</p>
                        <br />
                        <a href="#" class="buy-now">Buy now</a>
                        
                        <div class="triangle-nav">
                            <a href="#" id="triangle-up"><img src="images/triangle-up.png" alt="go up" /></a>
                            <a href="#" id="triangle-down"><img src="images/triangle-down.png" alt="go down" /></a>
                        </div>
                    </div>
                    
                    <div class="clear"></div>
                </div><!-- END product -->
                
                <p class="info-message">If you need a custom APP for your specific requirements, feel fre to contact us<br />
                or vote for our new APP on <a href="facebook.com">Facebook</a>!</p>
            
            </div>
        </div>
    </div>
    <!-- END products -->
    
    
    
    <div class=jump>
    <a name="to-team"></a>
    </div>
    
    <!-- --- TEAM --- -->
    <div id="team">
        <div class="holder">
            
            <h2><span>Our Team</span></h2>
            
            <div class="member" id="member-first">
                <div class="member-picture">
                    <img src="images/zeljka.png" alt="Željka Kiš" />
                </div>
                <div class="member-info">
                    <h4>Željka Kiš</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div><!-- END member -->
            
            <div class="member" id="member-second">
                <div class="member-picture">
                    <img src="images/tomislav.png" alt="Tomislav Krpan" />
                </div>
                <div class="member-info">
                    <h4>Tomislav Krpan</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div><!-- END member -->
            
            <div class="member" id="member-third">
                <div class="member-picture">
                    <img src="images/adam.png" alt="Adam Kesegić" />
                </div>
                <div class="member-info">
                    <h4>Adam Kesegić</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div><!-- END member -->
            
            <div class="clear"></div>
        </div>
    </div>
    <!-- END team -->
    
    
    
    <div class=jump>
    <a name="to-contact"></a>
    </div>
    
    <!-- --- CONTACT --- -->
    <div id="contact">
        <div class="holder">
            
            <h2><span>Contact</span></h2>
            
            <div class="holder-inner">
                <form action="<?php $_SERVER["PHP_SELF"] ?>">
                <div class="left-side">
                    
                    <input type="text" name="text" placeholder="Your Name*" />
                    <input type="email" name="email" placeholder="Your e-mail address*" />
                    <textarea type="text" name="subject" id="subject" placeholder="Subject"></textarea>
                    
                </div>
                
                <div class="right-side">
                    <textarea name="message" placeholder="Type your message here ..."></textarea>
                    <input type="submit" id="submit" name="submit" value="SEND!" />
                </div>
                
                <div class="clear"></div>
                </form>
            </div>
            
        </div>
    </div>
    <!-- END contact -->
    
    
    
    <!-- --- FOOTER --- -->
    <div id="footer">
        <a href="facebook.com">
            <img src="images/facebook.png" alt="facebook" />
        </a>
        <a href="facebook.com">
            <img src="images/facebook.png" alt="facebook" />
        </a>
        <a href="facebook.com">
            <img src="images/facebook.png" alt="facebook" />
        </a>
    </div>
    
    
    
    <!--JS-->
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/jquery-ui.js"></script>
    <script type="text/javascript" src="js/js.js"></script>
</body>
</html>
