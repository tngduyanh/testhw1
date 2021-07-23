const component = {};


component.welcomeScreen = `
    <h1>Welcome to my Screen</h1>
`;

component.registerScreen = `
<div class="reg-cont">
            <div class="ar">
                <div class="header">
                    <h3 style="font-family:cursive">WELCOME</h3>
                </div>

                <form id="reg-form">
                    <div class="inputname">
                        <div class="wrapper">
                            <input type="text" name="firstName" placeholder="fIrStNaMe?">
                            <div class="error" id="ftname-error"></div>
                        </div>

                        <div class="wrapper">
                            <input type="text" name="lastName" placeholder="LaStNaMe?">
                            <div class="error" id="ltname-error"></div>
                        </div>
                    </div>

                    <div class="wrapper">
                        <input type="email" name="email" placeholder="liame">
                        <div class="error" id="email-error"></div>
                    </div>

                    <div class="wrapper">
                        <input type="password" name="password" placeholder="Password?">
                        <div class="error" id="pass-error"></div>
                    </div>

                    <div class="wrapper">
                        <input type="password" name="confirmPassword" placeholder="Confirm password">
                        <div class="error" id="conpass-error"></div>
                    </div>

                    <!-- xong het phan input -->

                    <div class="fma">
                        <span class="cursor" id="redirect-to-login">Already have an account? Login</span>
                    </div>

                    <button class="button" type="submit">
                        Register
                    </button>
                </form>


            </div>
        </div>
`


component.loginScreen = `
<div class="log-cont">
<div class="ar">
    <div class="header">
        <h3 style="font-family:cursive">WELCOME</h3>
    </div>

    <form id="log-form">
        

        <div class="wrapper">
            <input type="email" name="email" placeholder="Input your email">
            <div class="error" id="email-error"></div>
        </div>

        <div class="wrapper">
            <input type="password" name="password" placeholder="Type your Password">
            <div class="error" id="pass-error"></div>
        </div>

        

        <!-- xong het phan input -->

        <div class="fma">
            <span class="cursor" id="redirect-to-register">Don't have an account? Register</span>
        </div>

        <button class="button" type="submit">
            Login
        </button>
    </form>


</div>
</div>
`
component.chatScreen = `
<div id="app">
<div style="position: relative;">
<img src="img/windows-10-hero-redesign-wallpaper-1920x1080_899885-mm-90.jpg" class="img-fluid" alt="...">
<p id="text1">Windows</p>
<div class="b1" style="top: 54%; left:12%">
  <a href="aboutWindows.html" class="b2">
     <p class="text6">LEARN MORE</p>
  </a>
 </div>
</div>
</div>
<div style="width: 100%">
<div id="a2">
 <img src="img/Your-childs-brain-on-technology-video-games.jpg" class="image2">
 <p id="text3">HOW TO<br>PREVENT YOUR CHILDREN FROM PLAYING VIDEO GAMES TOO MUCH</p>
 <div class="b1" style="top: 64%; left:40%">
   <a href="htpyc.html" class="b2">
       <p class="text6">LEARN MORE</p>
   </a>
 </div>
</div>
<div id="a3">
 <img src="img/Untitled(1).png" class="image3">
 <P ID="text4">HOW TO MAKE WINDOWS<br> 10 LOOKS LIKE WINDOWS 7</P>
 <div class="b1" style="top: 64%; left:43%">
   <a href="MW10LLW7.html" class="b2">
       <p class="text6">MORE INFO</p>
   </a>
 </div>
</div>
</div>
<div id="a4">
<img src="img/patch-section-bg-4b4bd9fba7.jpg" class="image4">
<a href="news.html"><p id="text5">LATEST NEWS</p></a>
<img src="img/windows-10-logo.webp" id="image5">
<img src="img/White.png" id="image7">
<p class="text7" style="text-transform: uppercase;">Windows 11 beta leaked</p>
<p class="text8">Microsoft’s upcoming Windows 11 operating system has leaked online today.<br> After screenshots were first published at Chinese site Baidu, the entire Windows 11<br> OS has appeared online, complete with a new user interface, Start menu, and lots<br> more.</p>
<div class="b3" style="top: 78.2%; left:14%">
   <a href="W11.html" class="b2">
       <p class="text6">READ MORE</p>
   </a>
 </div>
<img src="img/da-co-the-download-cac-file-iso-chinh-thuc-cho-windows-10-20h11.jpg" id="image6">
<img src="img/White.png" id="image8">
<p class="text9" style="text-transform: uppercase;">Windows 10 21H1 is now available</p>
<p class="text10">Windows 10’s May 2021 Update, also known as 21H1, was released on<br> May 18, 2021. Like the 20H2 update, this is a smaller update that focuses on<br> security improvements and polish. The big features originally planned for 21H1<br> have been delayed to 21H2 in late 2021.</p>
<div class="b3" style="top: 78.2%; right:14%">
   <a href="W1021H1.html" class="b2">
       <p class="text6">READ MORE</p>
   </a>
 </div>
</div>
</div>
</div>
`
component.aboutWindows= `
<div id="app">
        <div id="a1">
            <img src="img/windows-10-hero-redesign-wallpaper-1920x1080_899885-mm-90.jpg" id="image1" style="border-top: 10px solid purple;">
           <div style="width:90%; height:100%; margin:auto">
           <br><br><big><b><p id="text6">About Windows</p></b></big>
            <b><p id="text6">Windows</p></b>
            <p id="text6">Windows is a desktop operating system developed by Microsoft. For the past three decades, Windows has been the most popular operating system for personal computers.<br><br>Each version of Windows comes with a graphical user interface that includes a desktop with icons and a task bar that is displayed at the bottom of the screen by default. The Windows "File Explorer" allows users to open multiple windows, browse folders, and open files and applications. Most Windows versions include a Start menu, which provides quick access to files, settings, and the Windows search feature.<br><br>Microsoft often releases Windows with multiple editions, tailored for different users. For example, Windows 10 is available in "Home" and "Pro" editions. The Home edition is sufficient for most users, while the Pro edition includes additional networking and administrative features useful in corporate workspaces.<br><br>Windows runs on standard x86 hardware, such as Intel and AMD processors. Unlike Apple, which only lets users use MacOS on MacBook, Microsoft licenses the OS to multiple manufacturers. Therefore, numerous companies, such as Dell, HP, Acer, Asus, Lenovo, sell Windows PCs. Microsoft develops its own line of Windows Surface laptops as well.<br><br>Software programs written for Windows may be called apps, applications, or executable files. Regardless of their label, Windows software programs have an .EXE file extension. 64-bit versions of Windows can run both 32 and 64-bit apps, while 32-bit versions can only run 32-bit applications.</p>
            <b><p id="text6">64-bit Windows vs 32-bit Windows</p></b>
            <p id="text6">A 32-bit system can access 2<sup>32</sup> memory addresses, i.e 4 GB of RAM or physical memory ideally, it can access more than 4 GB of RAM also. A 64-bit system can access 2<sup>64</sup> memory addresses, i.e actually 18-Quintillion bytes of RAM. In short, any amount of memory greater than 4 GB can be easily handled by it.<br><br>Through the Windows system, all applications use the same shared resources called DLL Files. These files are structured slightly differently depending on whether you’re running a 32-bit or 64-bit application. You’ll run into some obstacles if a 32-bit application tries to reach for a 64-bit DLL version. In those instances, the application will typically stop working.<br><br>A major difference between 32-bit processors and 64-bit processors is the number of calculations per second they can perform, which affects the speed at which they can complete tasks. 64-bit processors can come in dual-core, quad-core, six-core, and eight-core versions for home computing. Multiple cores allow for an increased number of calculations per second that can be performed, which can increase the processing power and help make a computer run faster. Software programs that require many calculations to function smoothly can operate faster and more efficiently on the multi-core 64-bit processors, for the most part.<br><br>Using 64-bit one can do a lot in multi-tasking, user can easily switch between various applications without any windows hanging problems. Gamers can easily play games with high graphics like CoD: Modern Warfare, RDR2, GTA V,... or use high-end software like Photoshop or CAD which takes a lot of memory since it makes multi-tasking with big software, easy and efficient for users (if they get a video card with a 64-bit processor.)</p><br><br>
           </div>
        </div>
</div>
`
component.MW10LLW7=`
<div id="a1">
            <img src="img/Untitled.png" id="image1" style="border-top: 10px solid purple;">
        <div style="width:90%; height:100%; margin:auto">
        <br><br><big><b><p id="text6">Make Windows 10 looks like Windows 7</p></b></big>
            <b><p id="text6">Preparation</p></b>
            <p id="text6">First, download these:</p>
            <a href="https://www.deviantart.com/sagorpirbd/art/Aero-7-Themes-for-Win10-Final-523979941">Windows 7 themes for Windows 10 (you need a DeviantArt account to download)</a><br>
            <a href="https://uxthemepatcher.com/">UXThemePatcher (you will need this because Windows doesn't allow 3rd-party themes)</a><br>
            <a href="https://github.com/Open-Shell/Open-Shell-Menu/releases">OpenShell (you will need this to customize Windows icon in the desktop and start menu)</a><br>
            <a href="http://www.classicshell.net/forum/download/file.php?id=65&sid=2aa434921257180933dc51d89f01b4fa">Windows 7 Orb Start Buttons (you will need this to change Windows 10 start button)</a><br>
            <a href="https://wallpapersafari.com/w/lXkSAI">Addtional: Windows 7 lock screen wallpaper</a>
            <b><p id="text6">Customize Windows 10</p></b>
            <p id="text6">First of all, install UXThemePatcher</p>
            <p id="text6">Secondly, you need to extract the "aero_7_themes_for_win10_final_by_sagorpirbd_d8nypid.rar" file you have just downloaded from DeviantArt and go to Aero 7 Theme for Windows 10/Theme/Themes For 10 Build 14393 Anniversary Update and copy its content. After that, open Run by pressing Win+R at the same time and type %windir%/Resources/Themes/. Then, press Ctrl+V to paste the content. Next, go to Settings -> Personalization -> Themes and select one of the Aero 7 themes.</p>
            <p id="text6">Thirdly, you need to install OpenShell and extract "Start Buttons.zip" file (you can choose any Windows 7 Orb icon that fits your start menu in this zip file). Then go to Open-Shell in Start Menu and click Open-Shell menu settings. At the Start Button tab, check "Replace Start button". At Button look/Custom button/Button image, select the icon you just chose from "Start Buttons.zip" file</p>
            <p id="text6">Next, go to Start Menu Style tab and choose Windows 7 style. Click "Select skin..." under that, next to "Skin:" choose Windows Aero</p>
            <p id="text6">After that, hide Cortana icon/box by clicking right mouse button on the taskbar, go to Cortana and click Hidden. You can disable Lock Screen by starting Run (Win + R) -> Type regedit and hit Enter -> Go to HKEY_LOCAL_MACHINE -> SOFTWARE -> Policies -> Microsoft -> Windows, and right-click Windows -> Click New ->  Click Key -> Type Personalization and hit Enter -> Right-click the Personalization key you just created -> Click New ->  Click DWORD (32-bit) Value -> Type NoLockScreen and hit Enter -> Double-click the NoLockScreen DWORD you just created -> Type 1 in the Value data field and click OK. You can also make your Login Screen looks like Windows 7 by going to Settings -> Personalization -> Lock screen. Make sure Background is set "Picture". Click Browse under "Choose your picture" and select Windows 7 lock screen wallpaper you have just downloaded.</p>
            <b><p id="text6">You can also disable Notification Center</p></b>
            <p id="text6">For Windows 10 Pro and Enterprise: Hit Win+R to start Run, type: gpedit.msc and hit Enter. Then under Local Computer Policy go to User Configuration > Administrative Templates > Start Menu and Taskbar. Then in the right pane scroll down and double-click Remove Notifications and Action Center. Next, select Enabled, click OK, and then sign out and back in again or restart your PC.</p>
            <p id="text6">For Windows 10 Home: Hit Win+R to start Run, type: Regedit and hit Enter. Go to HKEY_CURRENT_USER -> SOFTWARE -> Policies -> Microsoft -> Windows -> Explorer (If you don’t see it, you’ll need to create the key and name it Explorer. To do that, right-click on the Windows key and select New > Key). After you’ve created/seen the Explorer key, right-click in the right pane and create a new DWORD (32-bit) value and name it: DisableNotificationCenter and give it a value of 1. Then restart your PC.</p>
            <i><b><p id="text6">I think this won't work on Windows 11 because Open-Shell icon only overlays the Start Menu icon, not replacing it; Windows 7 themes don't even work anymore</p></b></i><br><br>
        </div>
</div>
`
component.htpyc=`
<div id="a1">
            <img src="img/Your-childs-brain-on-technology-video-games.jpg" id="image1" style="border-top: 10px solid purple;">
        <div style="width:90%; height:100%; margin:auto">
        <br><br><big><b><p id="text6">How to prevent your child from playing too much video games (includes some other platforms)</p></b></big>
            <b><p id="text6">If your child has an iPhone</p></b>
            <p id="text6">Go to Settings -> Screen Time. Firstly, create a Screen Time passcode using the "Use Screen Time Passcode" button. Then, go to App Limits and tap Add Limit. After that, choose the games your child plays and tap Next. Next, select the amount of time you want to allocate to your child. Finally, tap Add.</p>
            <b><p id="text6">If your child has an Android device</p></b>
            <p id="text6">Firstly, open the Family Link app Family Link. Secondly, select your child. Next, on the "Today's activity" card, tap Set limits.After that, tap Empty hourglass and then Set limit Set limit (Next to your desired app). Then, set a daily time limit for the app. Finally, tap Set. </p>
            <b><p id="text6">If your child has a Windows PC/Laptop</p></b>
            <p id="text6">Firstly, go to your family group and sign in with your Microsoft account. Secondly, find your child's name and select Screen time. Next, set the schedule for devices together or separately. After that, select the schedule for each day, how much time your child has each day, and when they can use the device. By default, Max scheduled will be on, which means they can use the device for the full time range you've given them. If you edit your schedule choices, select Add, and then select Save. Remember, have your child sign out if they're not actively using their console. (Xbox)</p>
            <b><p id="text6">If your child has a PS4/PS5</p></b>
            <p id="text6">Firstly, on your PS system, go to [Settings] > [Parental Controls/Family Management] > [Family Management] and select the child account you would like to set Play Time controls for. Next, set a [Time Zone] then select [Play Time Settings]. Once you have set your restrictions, select [Save] to apply the changes.</p>
            <p id="text6">Search online to find how to restrict the playtime on other devices.</p><br><br>
        </div>
</div>
`
component.W11=`
<div id="a1"> 
            <img src="img/windows-10-logo.webp" id="image1" style="border-top: 10px solid purple;">
        <div style="width:90%; height:100%; margin:auto">
            <br><br><big><b><p id="text6">Windows 11</p></b></big>
            <i><p id="text6">"Right now we’re releasing Windows 10, and because Windows 10 is the <u><b><a href="https://youtu.be/hHZvUeAdzeI" style="text-decoration:none;color:black">last version of Windows</a></b></u>, we’re all still working on Windows 10." (believe us)</p></i>
            <p id="text6">Microsoft’s upcoming Windows 11 operating system has leaked online today. After screenshots were first published at Chinese site Baidu, the entire Windows 11 OS has appeared online, complete with a new user interface, Start menu, and lots more.</p>
            <p id="text6">The new Windows 11 user interface and Start menu look very similar to what was originally found in Windows 10X. Microsoft had been simplifying Windows for dual-screen devices, before canceling this project in favor of Windows 11. Visually, the biggest changes you’ll notice can be found along the taskbar. Microsoft has centered the app icons here, cleaned up the tray area, and included a new Start button and menu. If you don’t want the app icons and Start menu centered, there’s an option to move them all back to the left-hand side. Coupled with the dark mode that’s also available, and Windows 11 starts to look like a more refined version of Windows 10 than something dramatically new. </p>
            <img src="img/windows11.15.jpg" id="image2">
            <p id="text6">This updated Start menu is a simplified version of what currently exists in Windows 10 (rip Live Tiles). It includes pinned apps, recent files and buttons to view more. It’s really a lot more simplified than what exists in Windows 10 today.</p>
            <p id="text6">Microsoft is also using rounded corners throughout Windows 11. These are visible in context menus, and around apps and the File Explorer. The Start menu itself also includes rounded corners. This is still an early version of Windows 11, so not everything is included yet.</p>
            <p id="text6">You may have noticed a new icon in the Windows 11 taskbar, and it’s labeled Widgets in the operating system. Rumors have suggested Microsoft is bringing back Windows Widgets, and this early version appears to include some. As this is a very early version of Windows 11, the widgets aren’t loading fully in the OS, but they’re designed to slide out and provide quick access to news, weather, and other web content.</p>
            <p id="text6">While Microsoft canceled its Windows 10X operating system, the company is clearly reusing large parts of that work with Windows 11. Windows 10X was originally designed for dual-screen devices, before shifting toward traditional laptops and then being canceled. Windows 10X included a number of refined and simplified aspects to Windows, and most of that work is present in this leaked version of Windows 11.</p>
            <p id="text6">Windows 11 also includes new snap controls that you can access from the maximize button on all apps. They’re modern equivalents of the cascade windows function that has existed in the operating system for years. You can quickly snap windows side by side, or arrange them in sections on your desktop.</p>
            <p id="text6">Microsoft has been dropping hints like the video above that it’s ready to launch Windows 11. The software giant is holding a special Windows event to reveal its next OS on June 24th. The event starts at 11AM ET, and the event invite includes a window that creates a shadow with an outline that looks like the number 11. Microsoft execs have also been teasing a “next generation of Windows” announcement for months, and this leak now confirms that Windows 11 will be officially revealed later this month. <a href="https://drive.google.com/file/d/1wtg_tWGpNHspzGhF14WZ5YGVAT0TNJR3/view?usp=sharing">You can also download the leaked version right now</a></p><br><br>
        </div>
</div>
`
component.news=`
<div id="a1">
<div class="a2">
    <img src="img/Windows-11-SE-leak-696x365.jpg" class="image1" style="top:18%; left: 3%">
    <p class="text12">Windows 11 SE</p>
    <p class="text13">A stripped-down, tightly-locked version of W11</p>
    <div class="b1" style="top: 60%; right: 5%">
        <a href="W11SE.html" class="b2">
           <p class="text16">READ</p>
        </a>
     </div>
</div>
<div class="a2">
    <img src="img/windows-10-logo.webp" class="image1" style="top:15%; left: 3%;">
    <p class="text12">Windows 11 leaked</p>
    <p class="text13">And 6 years ago they said Windows 10 is the last lol</p>
    <div class="b1" style="top: 60%; right: 5%">
        <a href="W11.html" class="b2">
           <p class="text16">READ</p>
        </a>
     </div>
</div>
<div class="a2">
    <img src="img/windows-10-hero-redesign-wallpaper-1920x1080_899885-mm-90.jpg" class="image1" style="top:15%; left: 3%;">
    <p class="text12">W10's support ends in 2025</p>
    <p class="text13">All things must end... even Windows 10's support</p>
    <div class="b1" style="top: 60%; right: 5%">
        <a href="W10SP.html" class="b2">
           <p class="text16">READ</p>
        </a>
     </div>
</div>
<div class="a2">
    <img src="img/da-co-the-download-cac-file-iso-chinh-thuc-cho-windows-10-20h11.jpg" class="image1" style="top:15%; left: 3%;">
    <p class="text12">W10 21H1 released</p>
    <p class="text13">It's a minor update, but we can pin our hopes on 21H2</p>
    <div class="b1" style="top: 60%; right: 5%">
        <a href="W1021H1.html" class="b2">
           <p class="text16">READ</p>
        </a>
     </div>
</div>
</div>
`
component.W1021H1=`
<div id="a1">
            <img src="img/da-co-the-download-cac-file-iso-chinh-thuc-cho-windows-10-20h11.jpg" id="image1" style="border-top: 10px solid purple;">
        <div style="width:90%; height:100%; margin:auto">
        <br><br><big><b><p id="text6">Windows 10 21H1</p></b></big>
            <p id="text6">The May 2021 update to Windows 10 is here — you can download through Windows Update or <a href="https://www.itechtics.com/?dl_id=140">install using iso</a></p>
            <p id="text6">The new update offers some new minor features—improved Windows Hello support for systems with multiple cameras, an improved version of Windows Defender Application Guard, Microsoft Edge Chromium and improvements to the Group Policy Service that allow faster group policy updates for remote workers.</p>
            <b><p id="text6">Windows Hello</p></b>
            <p id="text6">Windows Hello is Microsoft's facial-recognition biometric authentication system—on machines with cameras, it allows the user to unlock the system by looking into the camera rather than typing in a password or swiping a fingerprint. Facial recognition isn't a particularly secure unlock method—a moderately knowledgeable attacker can frequently defeat it with a photograph—but for most users in relatively low-security environments, it's good enough.</p>
            <p id="text6">This month's Windows 10 updates Windows Hello to properly support systems with multiple cameras available—for example, a laptop with both a built-in webcam and a higher-end, user-supplied camera. Hello used to default to the internal camera only, but now it defaults to an external one when present—saving users some confusion in which direction to stare while trying to get to the desktop.</p>
            <b><p id="text6">Windows Defender Application Guard</p></b>
            <p id="text6">WDAG performance is improved with optimized document opening times:<br>

            - An issue is fixed that could cause a one minute or more delay when you open a Microsoft Defender Application Guard (WDAG) Office document. This can occur when you try to open a file using a Universal Naming Convention (UNC) path or Server Message Block (SMB) share link.<br>
            - A memory issue is fixed that could cause a WDAG container to use almost 1 GB of working set memory when the container is idle.<br>
            - The performance of Robocopy is improved when copying files over 400 MB in size.</p>
            <b><p id="text6">Microsoft Edge</p></b>
            <p id="text6">The new Chromium-based Microsoft Edge browser is included with this release. [let us remove it if we don't want to use it please :(]</p>
            <b><p class="text6" id="z2" onclick="change()">General fixes (click to read more)</p></b>
            <div id="z1">
                <p id="text6">This release includes the following enhancements and issues fixed:<br>

                - A memory leak in Internet Explorer 11 that occurs when you use the Chinese language pack.<br>
            
                - COM+ callout policies that cause a deadlock in certain applications.<br>
            
                - An issue that prevents certain Win32 apps from opening as a different user when you use the runas<br>
            
                - Unexpected screens during the Windows Out of Box Experience (OOBE).<br>
            
                - An issue that might cause a deadlock when a COM server delivers an event to multiple subscribers in parallel.<br>
            
                - An issue in Advanced display settings that shows the incorrect refresh rates available for high dynamic range (HDR) displays.<br>
            
                - An issue that might prevent certain CAD applications from opening if those applications rely on OpenGL.<br>
            
                - An issue that might cause video playback to flicker when rendering on certain low-latency capable monitors.<br>
            
                - An issue that sometimes prevents the input of strings into the Input Method Editor (IME).<br>
            
                - An issue that exhausts resources because Desktop Windows Manager (DWM) leaks handles and virtual memory in Remote Desktop sessions.<br>
            
                - A stop error that occurs at start up.<br>
            
                - An issue that might delay a Windows Hello for Business (WHfB) Certificate Trust deployment when you open the Settings-> Accounts-> Sign-in Options page.<br>
            
                - An issue that might prevent some keyboard keys from working, such as the home, Ctrl, or left arrow keys when you set the Japanese IME input mode to Kana.<br>
            
                - Removed the history of previously used pictures from a user account profile.<br>
            
                - Wrong language displayed on a console after you change the system locale.<br>
            
                - Host process of Windows Remote Management (WinRM) can stop working when it formats messages from a PowerShell plugin.<br>
            
                - Windows Management Instrumentation (WMI) service caused a heap leak each time security settings are applied to WMI namespace permissions.<br>
            
                - Screen rendering after opening games with certain hardware configurations.<br>
            
                - Startup times for applications that have roaming settings when User Experience Virtualization (UE-V) is turned on.<br>
            
                - A principal in a trusted MIT realm fails to obtain a Kerberos service ticket from Active Directory domain controllers (DC). This occurs on devices that installed Windows Updates that contain CVE-2020-17049 protections and configured PerfromTicketSignature to 1 or higher. These updates were released between November 10, 2020 and December 8, 2020. Ticket acquisition also fails with the error, “KRB_GENERIC_ERROR”, if callers submit a PAC-less Ticket Granting Ticket (TGT) as an evidence ticket without providing the USER_NO_AUTH_DATA_REQUIRED flag.<br>
            
                - High memory and CPU utilization in Microsoft Defender for Endpoint.<br>
            
                - We enhanced data loss prevention and insider risk management solution functionalities in Microsoft 365 endpoints.<br>
            
                - An error when you attempt to open an untrusted webpage using Microsoft Edge or open an untrusted Microsoft Office document. The error is, “WDAG Report – Container: Error: 0x80070003, Ext error: 0x00000001”. This issue occurs after installing the .NET update KB4565627.<br>
            
                - An issue that prevents wevtutil from parsing an XML file.<br>
            
                - Failure to report an error when the Elliptic Curve Digital Signature Algorithm (ECDSA) generates invalid keys of 163 bytes instead of 165 bytes.<br>
            
                - We added support for using the new Chromium-based Microsoft Edge as the assigned access single kiosk app. Now, you can also customize a breakout key sequence for single app kiosks. For more information, see Configure Microsoft Edge kiosk mode.<br>
            
                - User Datagram Protocol (UDP) broadcast packets that are larger than the maximum transmission unit (MTU). Devices that receive these packets discard them because the checksum is not valid.<br>
            
                - The WinHTTP AutoProxy service does not comply with the value set for the maximum Time To Live (TTL) on the Proxy Auto-Configuration (PAC) file. This prevents the cached file from updating dynamically.<br>
            
                - We improved the ability of the WinHTTP Web Proxy Auto-Discovery Service to ignore invalid Web Proxy Auto-Discovery Protocol (WPAD) URLs that the Dynamic Host Configuration Protocol (DHCP) server returns.<br>
            
                - We displayed the proper Envelope media type as a selectable output paper type for Universal Print queues.<br>
            
                - We ended the display of a random paper size for a printer when it uses the Microsoft Internet Printing Protocol (IPP) Class Driver.<br>
            
                - We enabled Windows to retrieve updated printer capabilities to ensure that users have the proper set of selectable print options.<br>
            
                - We updated support for hole punch and stapling locations for print jobs with long edge first paper feed direction on certain printers.<br>
            
                - An issue that might cause the IKEEXT service to stop working intermittently.<br>
            
                - An issue that might prevent a Non-Volatile Memory Express (NVMe) device from entering the proper power state.<br>
            
                - An issue that might cause stop error 7E in sys on servers running the Network File System (NFS) service.<br>
            
                - An issue that prevents the User Profile Service from detecting a slow or a fast link reliably.<br>
            
                - An issue that causes contention for a metadata lock when using Work Folders.<br>
            
                - We added a new dfslogkey: Keypath: HKEY_LOCAL_MACHINE/SOFTWARE/MICROSOFT/dfslog. The RootShareAcquireSuccessEvent field has the following possible values: Default value = 1; enables the log. Value other than 1; disables the log. If this key does not exist, it will be created automatically. To take effect, any change to dfslog/RootShareAcquireSuccessEvent in the registry requires that you restart the DFSN service.<br>
            
                - We updated the Open Mobile Alliance (OMA) Device Management (DM) sync protocol by adding a check-in reason for requests from the client to the server. The check-in reason will allow the mobile device management (MDM) service to make better decisions about sync sessions. With this change, the OMA-DM service must negotiate a protocol version of 4.0 with the Windows OMA-DM client.<br>
            
                - We turned off token binding by default in Windows Internet (WinINet).<br>
            
                - An issue that might prevent the correct Furigana characters from appearing in apps that automatically allow the input of Furigana characters. You might need to enter the Furigana characters manually. This issue occurs when using the Microsoft Japanese Input Method Editor (IME) to enter Kanji characters in these apps.<br>
            
            </div>
            <p id="text6">For more details, go to <a href="https://docs.microsoft.com/en-us/windows/whats-new/whats-new-windows-10-version-21h1">Microsoft Docs about Windows 10 21H1</a></p><br><br>
        </div>
        
</div>
`
component.W10SP=`
<div id="a1">
        <img src="img/windows-10-hero-redesign-wallpaper-1920x1080_899885-mm-90.jpg" id="image1" style="border-top: 10px solid purple;">
       <div style="width:90%; height:100%; margin:auto">
       <br><br><big><b><p id="text6">Windows 10 support ends in 2025</p></b></big>
        <p id="text6">Microsoft will end support for Windows 10. Microsoft revealed the retirement date for Windows 10 in an updated <a href="https://docs.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro">support life cycle page</a> for the OS. This is the first time Microsoft has described the end of support for Windows 10.</p>
        <p id="text6">The company quietly announced the news in the page mentioned above, as spotted by Thurrott. Previously, the page noted when Microsoft would end support for certain versions of Windows 10. It now states Microsoft started supporting Windows 10 Home and Pro on July 29th, 2015 and reveals the operating system's "retirement date", Oct. 14, 2025. The end-of-support timeline puts the Windows 10 lifecycle at a hair over 10 years, similar to previous iterations of the OS.</p>
        <p id="text6">As for what we're expecting from Windows 11, there will probably be a redesign, including a revamped Windows Store. Microsoft recently canceled Windows 10X, which was initially going to be for dual-screen devices. It said it would bring some features planned for that OS into the standard version of Windows. Perhaps that'll make it easier for manufacturers and developers to support dual-screen devices without having to work with a separate version of Windows.</p><br><br>
       </div>
</div>
`
component.W11SE=`
<div id="a1">
        <img src="img/74110cc0-cfa5-11eb-b7bf-97881cc5c9c4.cf.jpg" id="image1" style="border-top: 10px solid purple;">
       <div style="width:90%; height:100%; margin:auto">
       <br><br><big><b><p id="text6">Windows 11 SE</p></b></big>
        <p id="text6">Microsoft appears to be working on a successor to Windows 10 S (the one that can only run applications downloaded from the Windows Store. Every other version of Windows 10 has the option to install applications from third-party sites and stores, as has the majority of versions of Windows before it.), called “Windows 11 SE”.</p>
        <p id="text6">Ahead of Microsoft’s June 24 event, an early build of Windows 11 recently appeared online and it has been confirmed by several reputable sources that it is indeed a legitimate build. Thanks to the leaked build, we know that most Windows Sun Valley rumours and speculations were accurate.</p>
        <p id="text6">One of those versions is Windows 11 SE, supposed to be the new version of Windows 10 S. The SE edition uses the “Cloud Edition” codename, which was previously used for Windows 10 in S Mode.</p>
        <p id="text6">Because of the Windows 10 S' success in education, it looks like Microsoft hasn’t given up on the idea of lightweight operating systems. (schools always buy dead computers so it succeeded lol)</p>
        <p id="text6">Like Windows 10 in S Mode, Windows 11 SE is a tightly-locked version of Windows that limits the capabilities of the operating system.</p>
        <p id="text6">It features the same interface and primary capabilities as Windows 11 Home, Pro, Enterprise and Education. However, it appears to be a more restrictive and lightweight version of Windows for lower-powered devices or enterprise environments.</p>
        <p id="text6">It’s possible that the leaked SE edition of Windows seems to be aimed at enterprise customers. For example, Microsoft has removed consumer-centric features like “Your Phone” integration from the Settings app. Likewise, there are no Microsoft Edge or Bing ads in the Settings app.</p>
        <img src="img/Windows-Store-on-Windows-11-SE.jpg" id="image2">
        <p id="text6">For some reasons, Microsoft Store doesn’t work out in SE by default. To run the Store, we need to configure Group Policies and remove the restriction. There’s another interesting change: Win32 apps are no longer blocked on this restricted SKU of Windows. Previously, Windows 10 S didn’t support Win32 apps and users were forced to download programs from the Store.</p>
        <p id="text6">Even as a restricted version of Windows, SE still benefits from the regular Windows 11 features. It includes rounded corners, Start Menu, Windows Search, updated File Explorer, and more.</p><br><br>
       </div>
</div>
`
component.history=`
<div id="a4">
        <img src="img/video_bg.jpg" id="Image3">
        <p id="text2">Evolution of Windows</p>
        <img src="img/video_frame.png" id="Image4">
        <p id="text3">Now playing</p>
        <p id="text4">Current not playing</p>
        <iframe src="//:0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" id="video2" allowfullscreen></iframe>
        <div id="a5" style="overflow: hidden;">
            <div class="a6" style="top:0%" onclick="change()"></div>
            <div class="a6" style="top:15%" onclick="change1()"></div>
            <div class="a6" style="top:30%" onclick="change2()"></div>
            <div class="a6" style="top:45%" onclick="change3()"></div>
            <div class="a6" style="top:60%" onclick="change4()"></div>
            <div class="a6" style="top:75%" onclick="change5()"></div>
            <p class="listtext" id="text5" onclick="change()">Video 1</p>
            <p class="listtext1" id="text6" onclick="change()">Windows Evolution (short)</p>
            <p class="listtext" id="text7" onclick="change1()">Video 2</p>
            <p class="listtext1" id="text8" onclick="change1()">Evolution of Microsoft Windows (long)</p>
            <p class="listtext "id="text9" onclick="change2()">Video 3</p>
            <p class="listtext1"id="text10" onclick="change2()">Evolution of Windows Startup Sounds</p>
            <p class="listtext" id="text11" onclick="change3()">Video 4</p>
            <p class="listtext1"id="text12" onclick="change3()">Evo of Win Startup & Shutdown sounds</p>
            <p class="listtext" id="text13" onclick="change4()">Video 5</p>
            <p class="listtext1"id="text14" onclick="change4()">Evo of Win S&S Sounds (very long)</p>
            <p class="listtext" id="text15" onclick="change5()">Video 6</p>
            <p class="listtext1" id="text16" onclick="change5()">All Sounds (Win 3.1 - Win 8)</p>
        </div>
    </div>
    <img src="//:0" id="image1">
        <div style="width:90%; height:100%; margin:auto">
          <big><i><b><p class="text17" id="text6">All Windows versions - Click a Windows version to read more (please close the tab you are reading before opening another)</p></b></i></big>
          <p class="text17" id="text17a" onclick="change24()">Windows Server 2003</p>
          <p class="text18" id="text17b">Windows Server 2003 is the second version of Windows Server operating system produced by Microsoft. It's also the part of the Windows NT family of operating systems and released on April 24, 2003.[9] It is derived from the Windows XP operating system. It is the successor to Windows 2000 and the predecessor to Windows Server 2008. An updated version, Windows Server 2003 R2, was released to manufacturing on December 6, 2005. Windows Server 2003's kernel was later adopted in the development of Windows Vista.</p>
          <p class="text17" id="text18a" onclick="change25()">Windows Server 2008</p>
          <p class="text18" id="text18b">Windows Server 2008 is the fourth release of the Windows Server operating system produced by Microsoft as part of the Windows NT family of the operating systems, based on Windows Vista. It was released to manufacturing on February 4, 2008, and generally to retail on February 27, 2008. Windows Server 2008 is the successor of Windows Server 2003, which is derived from the Windows XP codebase, released nearly five years earlier.</p>
          <p class="text17" id="text19a" onclick="change26()">Windows Server 2012</p>
          <p class="text18" id="text19b">Windows Server 2012, codenamed "Windows Server 8", is the sixth version of the Windows Server operating system by Microsoft, as part of the Windows NT family of operating systems. It is the server version of Windows based on Windows 8 and succeeds Windows Server 2008 R2, which is derived from the Windows 7 codebase, released nearly three years earlier. Two pre-release versions, a developer preview and a beta version, were released during development. The software was generally available to customers starting on September 4, 2012, by Microsoft. A successor was released on October 18, 2013, entitled Windows Server 2012 R2. Microsoft ended mainstream support for Windows Server 2012 on October 9, 2018, and extended support will end on October 10, 2023.</p>
          <p class="text17" id="text20a" onclick="change27()">Windows Server 2016</p>
          <p class="text18" id="text20b">Windows Server 2016 is the eighth release of the Windows Server server operating system developed by Microsoft as part of the Windows NT family of operating systems. It was developed concurrently with Windows 10 and is the successor to Windows Server 2012 R2. The first early preview version (Technical Preview) became available on October 1, 2014 together with the first technical preview of System Center. Windows Server 2016 was released on September 26, 2016 at Microsoft's Ignite conference and broadly released for retail sale on October 12, 2016. It has three successors: Windows Server 2019, Windows Server 2022, and the Windows Server Semi-Annual Channel, which excludes the graphical user interface and many older components.</p>
          <p class="text17" id="text21a" onclick="change28()">Windows Server 2019</p>
          <p class="text18" id="text21b">Windows Server 2019 is the ninth (and the latest) version of the Windows Server operating system by Microsoft, as part of the Windows NT family of operating systems, developed concurrently with Windows 10 version 1809. It succeeded Windows Server 2016, announced on March 20, 2018 and being officially released to the public on October 2, 2018.</p>
          <p class="text17" id="text22a" onclick="change6()">Windows 1.0</p>
          <p class="text18" id="text22b">Windows 1.0 is a graphical operating environment for personal computers, developed by Microsoft. Microsoft had worked with Apple Computer to develop applications for Apple's 1984 original Macintosh, the first mass-produced personal computer with a graphical user-interface (GUI) that enabled users to see user-friendly icons on screen. Microsoft released Windows 1.0 on November 20, 1985, as the first version of the Microsoft Windows line. It runs as a graphical, 16-bit multi-tasking shell on top of an existing MS-DOS installation, providing an environment which can run graphical programs designed for Windows, as well as existing MS-DOS software. Microsoft's founder Bill Gates spearheaded the development of Windows 1.0 after he saw a demonstration of a similar software suite, Visi On, at COMDEX in 1982. Despite positive responses to early presentations and support from a number of hardware- and software-makers, critics received Windows 1.0 poorly, feeling that it did not meet their expectations. In particular, they raised concerns about the lack of resources for new users, and performance issues, especially on systems with lower hardware specifications. Despite the criticisms, Windows 1.0 proved an important milestone for Microsoft, as it introduced the Microsoft Windows line. On December 31, 2001, Microsoft declared Windows 1.0 obsolete and stopped providing support and updates for the system.</p>
          <p class="text17" id="text23a" onclick="change7()">Windows 2</p>
          <p class="text18" id="text23b">Windows 2.0 is an obsoleted 16-bit Microsoft Windows GUI-based operating environment that was released on December 9, 1987, and the successor to Windows 1.0. This product's family includes Windows 2.0, a base edition for 8086 real mode, and Windows/386 2.0, an enhanced edition for i386 protected mode. Windows 2.0 allowed application windows to overlap each other, unlike its predecessor Windows 1.0, which could display only tiled windows. Windows 2.0 also introduced more sophisticated keyboard-shortcuts and the terminology of "Minimize" and "Maximize", as opposed to "Iconize" and "Zoom" in Windows 1.0. The basic window setup introduced here would last through Windows 3.1. New features in Windows 2.0 included support for the new capabilities of the i386 CPU in some versions (see § Editions, below), 256-color VGA graphics, and EMS memory support. It was also the last version of Windows that did not require a hard disk. With the improved speed, reliability and usability, computers now started becoming a part of daily life for some workers. Desktop icons and use of keyboard shortcuts helped to speed up work. The Windows 2.x EGA, VGA, and Tandy drivers notably provided a workaround in Windows 3.0 for users who wanted color graphics on 8086 machines (a feature that version normally did not support). IBM licensed Windows's GUI for OS/2 as Presentation Manager, and the two companies stated that it and Windows 2.0 would be almost identical.</p>
          <p class="text17" id="text24a" onclick="change8()">Windows 3.0</p>
          <p class="text18" id="text24b">Windows 3.0 is the third major release of Microsoft Windows, launched in 1990. Like its predecessors, it is not an operating system, but rather a graphical operating environment that runs on top of DOS. It features a new graphical user interface (GUI) where applications are represented as clickable icons, as opposed to the list of file names seen in its predecessors. Later updates would expand the software's capabilities, one of which added multimedia support for sound recording and playback, as well as support for CD-ROMs. Windows 3.0 is the first version of Windows to perform well both critically and commercially. Critics and users considered its GUI to be a challenger to those of Apple Macintosh and Unix. Other praised features were the improved multitasking, customizability, and especially the utilitarian management of computer memory that troubled the users of Windows 3.0's predecessors. Microsoft was criticized by third-party developers for the bundling of its separate software with the operating environment, which they viewed as an anticompetitive practice. Windows 3.0 sold 10 million copies before it was succeeded by Windows 3.1 in 1992.</p>
          <p class="text17" id="text25a" onclick="change9()">Windows 3.1</p>
          <p class="text18" id="text25b">Windows 3.1 is a series of 16-bit operating environments produced by Microsoft for use on personal computers, released on April 6, 1992. The series began with Windows 3.1, which was first sold during April 1992 as a successor to Windows 3.0. Subsequent versions were released between 1992 and 1993, notably Windows 3.11, until the series was superseded by the Windows 9x series starting in 1995 with Windows 95. During its lifespan, Windows 3.1 introduced several enhancements to the still MS-DOS-based platform, including improved system stability, expanded support for multimedia, TrueType fonts, and workgroup networking. Official support for Windows 3.1 ended on December 31, 2001. However, OEM licensing for Windows for Workgroups 3.11 on embedded systems continued to be available until November 1, 2008.</p>
          <p class="text17" id="text26a" onclick="change10()">Windows NT 3.1</p>
          <p class="text18" id="text26b">Windows NT 3.1 is a major release of the Windows NT operating system developed by Microsoft and oriented towards businesses. It is the first release of Windows NT and was released on July 27, 1993. At the time of Windows NT's release, Microsoft's Windows 3.1 desktop environment had established brand recognition and market share; but Windows 3.1 relied on the DOS operating system for essential functions, and it had a constrictive 16-bit architecture. Windows NT, however, was a complete, 32-bit operating system that retained a desktop environment familiar to Windows 3.1 users. By extending the Windows brand and beginning Windows NT at version 3.1, Microsoft implied that consumers should expect a familiar user experience. The name Windows NT ("New Technology") advertised that this was a re-engineered version of Windows. Windows NT began as a rewrite of the OS/2 operating system, which Microsoft had co-developed with IBM in the 1980s. For several reasons, including the market success of Windows 3.0 in 1990, Microsoft decided to advance Windows rather than OS/2. They relinquished their OS/2 development responsibilities to IBM, and forked their work on OS/2 v3.0 into a competing operating system. </p>
          <p class="text17" id="text27a" onclick="change11()">Windows 3.2</p>
          <p class="text18" id="text27b">Windows 3.2 Chinese Edition or Windows 3.2 released on November 22, 1993 and released officially to manufacturing on April 27, 1994 is an updated version of the Chinese version of Windows 3.1. The update was limited to this language version, as it fixed only issues related to the complex writing system of the Chinese language. Windows 3.2 was generally sold by computer manufacturers with a ten-disk version of MS-DOS that also had Simplified Chinese characters in basic output and some translated utilities.</p>
          <p class="text17" id="text28a"onclick="change12()">Windows NT 3.5</p>
          <p class="text18" id="text28b">Windows NT 3.5 is a major release of the Windows NT operating system developed by Microsoft and oriented towards businesses. It was released on September 21, 1994 and is the second release of Windows NT. One of the primary goals during Windows NT 3.5 development was to improve the operating system's performance. As a result, the project was codenamed "Daytona", after the Daytona International Speedway in Daytona Beach, Florida. Like many other older Windows versions before 1996, Microsoft stopped supporting Windows NT 3.5 on December 31, 2001. Support for Windows NT 3.51 Workstation also ended on that date. </p>
          <p class="text17" id="text29a" onclick="change13()">Windows 95</p>
          <p class="text18" id="text29b">Windows 95 is a consumer-oriented operating system developed by Microsoft as part of its Windows 9x family of operating systems. The first operating system in the 9x family, it is the successor to Windows 3.1x, and was released to manufacturing on August 15, 1995, and generally to retail on August 24, 1995. Windows 95 merged Microsoft's formerly separate MS-DOS and Microsoft Windows products, and featured significant improvements over its predecessor, most notably in the graphical user interface (GUI) and in its simplified "plug-and-play" features. There were also major changes made to the core components of the operating system, such as moving from a mainly cooperatively multitasked 16-bit architecture to a 32-bit preemptive multitasking architecture, at least when running only 32-bit protected mode applications. Accompanied by an extensive marketing campaign, Windows 95 introduced numerous functions and features that were featured in later Windows versions, such as the taskbar, notification area, and the "Start" button. Three years after its introduction, Windows 95 was followed by Windows 98. Microsoft ended extended support for Windows 95 on December 31, 2001. </p>
          <p class="text17" id="text30a" onclick="change14()">Windows NT 4.0</p>
          <p class="text18" id="text30b">Windows NT 4.0 is a major release of the Windows NT operating system developed by Microsoft and oriented towards businesses. It was released to manufacturing on July 31, 1996, and was launched to retail on August 24, 1996, exactly one year after the release of its MS-DOS equivalent, Windows 95. It was Microsoft's primary business-oriented operating system until the introduction of Windows 2000. Workstation, server and embedded editions were sold; all editions feature a graphical user interface similar to that of Windows 95. Microsoft ended mainstream support for Windows NT 4.0 Workstation on June 30, 2002 and ended extended support on June 30, 2004, while Windows NT 4.0 Server mainstream support ended on December 31, 2002 and extended support ended on December 31, 2004. Both editions were succeeded by Windows 2000 Professional and the Windows 2000 Server Family, respectively. Windows NT 4.0 is also the last version where the desktop and server versions of Windows shared the same name.</p>
          <p class="text17" id="text31a" onclick="change15()">Windows 98</p>
          <p class="text18" id="text31b">Windows 98 is an operating system developed by Microsoft as part of its Windows 9x family of Microsoft Windows operating systems. It is the successor to Windows 95, and was released to manufacturing on May 15, 1998, and generally to retail on June 25, 1998. Like its predecessor, it is a hybrid 16-bit and 32-bit monolithic product with the boot stage based on MS-DOS. Windows 98 is a heavily web-integrated operating system that bears numerous similarities to its predecessor. It heavily relies on the HTML language. Most of the improvements are cosmetic or designed to improve the user experience, but there are a handful of features that enhance system functionality and capabilities. These include improved USB support and accessibility, as well as support for hardware advancements such as DVD players. It was the first Windows operating system to adopt the Windows Driver Model. It also introduced features that would become standard in future generations of Windows, such as Disk Cleanup, Windows Update, multi-monitor support, and Internet Connection Sharing. Microsoft had marketed Windows 98 as a "tune-up" to Windows 95, rather than an entirely improved next generation of Windows. Upon release, it was generally well received for its web-integrated interface and ease of use, as well as for addressing issues that had been present in Windows 95, though users had pointed out that it was not significantly more stable than its predecessor. It saw one major update called Windows 98 Second Edition (SE) on May 5, 1999, and was succeeded by Windows Me in 2000. It sold an estimated 58 million licenses, and Microsoft ended mainstream support for both Windows 98 and 98 SE on June 30, 2002, and ended extended support on July 11, 2006.</p>
          <p class="text17" id="text32a" onclick="change16()">Windows 2000</p>
          <p class="text18" id="text32b">Windows 2000 is a major release of the Windows NT operating system developed by Microsoft and oriented towards businesses. It was released to manufacturing on December 15, 1999 and was officially released to retail on February 17, 2000. It is the successor to Windows NT 4.0, released in 1996, and both Windows 2000 and Windows Me were succeeded by Windows XP in 2001. Four editions of Windows 2000 were released: Professional, Server, Advanced Server, and Datacenter Server; the latter was both released to manufacturing and launched months after the other editions. While each edition of Windows 2000 was targeted at a different market, they shared a core set of features, including many system utilities such as the Microsoft Management Console and standard system administration applications. Windows 2000 introduced NTFS 3.0, Encrypting File System, as well as basic and dynamic disk storage. Support for people with disabilities was improved over Windows NT 4.0 with a number of new assistive technologies, and Microsoft increased support for different languages and locale information. The Windows 2000 Server family has additional features, most notably the introduction of Active Directory, which in the years following became a widely used directory service in business environments. Microsoft marketed Windows 2000 as the most secure Windows version ever at the time; however, it became the target of a number of high-profile virus attacks such as Code Red[16] and Nimda.[17] For ten years after its release, it continued to receive patches for security vulnerabilities nearly every month until reaching the end of its lifecycle on July 13, 2010. Windows NT 5.0 is the last version of Microsoft Windows to display the "Windows NT" designation. Windows 2000 and Windows 2000 Server are succeeded by Windows XP (released in October 2001) and Windows Server 2003 (released in April 2003), respectively. </p>
          <p class="text17" id="text33a" onclick="change17()">Windows Me</p>
          <p class="text18" id="text33b">Windows Millennium Edition, or Windows Me (marketed with the pronunciation of the pronoun "me"), is an operating system produced by Microsoft as part of the Windows 9x family of operating systems. It was the direct successor to Windows 98, and was released to manufacturing on June 19, 2000, with retail sales beginning on September 14, 2000. It is the third and final product of the Windows 9x family, which is based on the Windows 95 kernel and MS-DOS; while its successor Windows XP is based on the Microsoft's Windows NT kernel instead. Windows Me was targeted specifically at home PC users, and included Internet Explorer 5.5, Windows Media Player 7, and the new Windows Movie Maker software, which provided basic video editing and was designed to be easy to use for home users. Microsoft also incorporated features first introduced in Windows 2000, which had been released as a business-oriented operating system seven months earlier, into the graphical user interface, shell, and Windows Explorer. Although Windows Me was still ultimately based around MS-DOS like its predecessors, access to real-mode MS-DOS was restricted to decrease system boot time. Windows Me was initially positively received, but its reception became more negative as time went on, to the point that it was heavily panned by users due to stability issues. Retrospectively, Windows Me is viewed as one of the worst operating systems Microsoft has ever produced. In October 2001, Windows XP was released to the public, having already been under development at the time of Windows Me's release, and popularized most of Me's features, while being far more stable. Extended support for Windows Me ended on July 11, 2006.</p>
          <p class="text17" id="text34a" onclick="change18()">Windows XP</p>
          <p class="text18" id="text34b">Windows XP is a major release of the Windows NT operating system developed by Microsoft. It was the direct successor to both Windows 2000 for professional users and Windows Me for home users, and it was released to manufacturing on August 24, 2001, with retail sales beginning on October 25, 2001. It was Microsoft's operating system for use on personal computers such as home and business desktops, laptops, tablet PCs and media center PCs until replaced by Windows Vista in February 2007.Development of Windows XP began in the late 1990s as "Neptune", an operating system (OS) built on the Windows NT kernel which was intended specifically for mainstream consumer use. An updated version of Windows 2000 was also originally planned for the business market; however, in January 2000, both projects were scrapped in favor of a single OS codenamed "Whistler", which would serve as a single OS platform for both consumer and business markets. As such, Windows XP was the first consumer edition of Windows not to be based on the Windows 95 kernel and MS-DOS. Upon its release, Windows XP received critical acclaim, with critics noting increased performance and stability (especially in comparison to Windows Me), a more intuitive user interface, improved hardware support, and expanded multimedia capabilities. However, some industry reviewers were concerned by the new licensing model and product activation system. Windows XP and Windows Server 2003 are succeeded by Windows Vista and Windows Server 2008 released in January 2007 and February 2008, respectively. Extended support for Windows XP ended on April 8, 2014, after which the operating system ceased receiving further support or security updates. Windows Embedded POSReady 2009, based on Windows XP Professional, received security updates until April 2019. Unofficial methods were made available to apply the updates to other editions of Windows XP. Microsoft officially discouraged this practice, citing incompatibility issues. As of June 2021, 0.6% of Windows PCs run Windows XP. Africa has the highest percentage of Windows PCs that use Windows XP at 1.8%. 0.19% of all devices across all platforms run Windows XP. Windows XP is still very prevalent in many countries, such as Armenia where over 50% of computers use Windows XP.</p>
          <p class="text17" id="text35a" onclick="change19()">Windows Vista</p>
          <p class="text18" id="text35b">Windows Vista is a major release of the Windows NT operating system developed by Microsoft. Development was completed on November 8, 2006, and over the following three months, it was released in stages to computer hardware and software manufacturers, business customers and retail channels. On January 30, 2007, it was released internationally and was made available for purchase and download from the Windows Marketplace; it is the first release of Windows to be made available through a digital distribution platform. The release of Windows Vista came more than five years after the introduction of its predecessor, Windows XP, the longest time span between successive releases of Microsoft Windows desktop operating systems. New features of Windows Vista include an updated graphical user interface and visual style dubbed Aero, a new search component called Windows Search, redesigned networking, audio, print and display sub-systems, and new multimedia tools such as Windows DVD Maker. Vista aimed to increase the level of communication between machines on a home network, using peer-to-peer technology to simplify sharing files and media between computers and devices. Windows Vista included version 3.0 of the .NET Framework, allowing software developers to write applications without traditional Windows APIs. Microsoft's primary stated objective with Windows Vista was to improve the state of security in the Windows operating system. One common criticism of Windows XP and its predecessors was their commonly exploited security vulnerabilities and overall susceptibility to malware, viruses and buffer overflows. In light of this, Microsoft chairman Bill Gates announced in early 2002 a company-wide "Trustworthy Computing initiative", which aimed to incorporate security into every aspect of software development at the company. Microsoft stated that it prioritized improving the security of Windows XP and Windows Server 2003 above finishing Windows Vista, thus delaying its completion. While these new features and security improvements garnered positive reviews, Vista was also the target of much criticism and negative press. Criticism of Windows Vista targeted its high system requirements, its more restrictive licensing terms, the inclusion of a number of then-new DRM technologies aimed at restricting the copying of protected digital media, lack of compatibility with some pre-Vista hardware and software, longer boot time, and the number of authorization prompts for User Account Control. As a result of these and other issues, Windows Vista saw initial adoption and satisfaction rates lower than Windows XP. However, Vista usage had surpassed Microsoft's pre-launch two-year-out expectations of achieving 200 million users, with an estimated 330 million Internet users in January 2009.<br><br> At the release of its successor, Windows 7 (October 2009), Windows Vista (with approximately 400 million Internet users) was the second most widely used operating system on the Internet with an approximately 19% market share, the most widely used being Windows XP with an approximately 63% market share. In May 2010, Windows Vista's market share had an estimated range from 15% to 26%. On October 22, 2010, Microsoft ceased sales of retail copies of Windows Vista, and the OEM sales for Vista ceased a year later.<br><br> Official mainstream support for Vista ended on April 10, 2012, extended support ended on April 11, 2017, and a built-in time bomb that blocks Windows Update on Windows Vista versions newer than KB3205400 released in December 2016 displays a static icon with an information page link starting from April 12, 2017. As of May 2021, Vista's market share has declined to 0.25% of Windows' total market share. The server equivalent, Windows Server 2008, received security updates until January 2020; unofficial methods were made available to apply these updates to Windows Vista. </p>
          <p class="text17" id="text36a" onclick="change20()">Windows 7</p>
          <p class="text18" id="text36b">Windows 7 is a major release of the Windows NT operating system developed by Microsoft. It was released to manufacturing on July 22, 2009, and became generally available on October 22, 2009. It is the successor to Windows Vista, released nearly three years earlier. It remained an operating system for use on personal computers, including home and business desktops, laptops, tablet PCs and media center PCs, and itself was replaced in November 2012 by Windows 8, the name spanning more than three years of the product. Until April 9, 2013, Windows 7 RTM provided content such as security updates, software updates, PC driver updates and technical support, after which installation of Service Pack 1 is required for users to receive support and updates. Windows 7's server counterpart, Windows Server 2008 R2, was released at the same time. The last supported version of Windows based on this operating system was released on July 1, 2011, entitled Windows Embedded POSReady 7. On January 12, 2016, Microsoft ended support for Internet Explorer versions older than Internet Explorer 11 on Windows 7. Extended support ended on January 14, 2020, over ten years after the release of Windows 7, after which the operating system ceased receiving further support or security updates to most users, and all PCs that blocks Windows Update on Windows 7 versions newer than KB4499164 released in May 2019 displays a full-screen upgrade warning notification with an information page link starting from January 15, 2020. A support program is currently available for enterprises, providing security updates for Windows 7 for up to four years since the official end of life. However, Windows Embedded POSReady 7, the last Windows 7 variant, continues to receive security updates until October 2021.</p>
          <p class="text17" id="text37a" onclick="change21()">Windows 8</p>
          <p class="text18" id="text37b">Windows 8 is a major release of the Windows NT operating system developed by Microsoft. The product was released to manufacturing on August 1, 2012, and generally to retail on October 26, 2012. Windows 8 was made available for download via MSDN and TechNet and available as a replacement to all Windows 7 users via Windows Update. Windows 8 introduced major changes to the operating system's platform and user interface to improve its user experience on tablets, where Windows was now competing with mobile operating systems, including Android and iOS.[7] In particular, these changes included a touch-optimized Windows shell based on Microsoft's "Metro" design language and the Start screen (which displays programs and dynamically updated content on a grid of tiles), a new platform for developing "apps" with an emphasis on touchscreen input, integration with online services (including the ability to synchronize apps and settings between devices), and Windows Store, an online distribution for downloading and purchasing new software. Many of these features were adoptions from Windows Phone. Windows 8 added support for USB 3.0, Advanced Format hard drives, near field communications, and cloud computing. Additional security features were introduced, such as built-in antivirus software, integration with Microsoft SmartScreen phishing filtering service and support for UEFI Secure Boot on supported devices with UEFI firmware, to prevent malware from infecting the boot process. Windows 8 was released to a mixed critical reception. Although reaction towards its performance improvements, security enhancements, and improved support for touchscreen devices was positive, the new user interface of the operating system was widely criticized for being potentially confusing and difficult to learn, especially when used with a keyboard and mouse instead of a touchscreen. Despite these shortcomings, 60 million Windows 8 licenses were sold through January 2013, a number that included both upgrades and sales to OEMs for new PCs. Microsoft released Windows 8.1 in October 2013, addressing some aspects of Windows 8 that were criticized by reviewers and early adopters and incorporated additional improvements to various aspects of the operating system. Windows 8 was ultimately succeeded by Windows 10 in July 2015. Support for IE10 on Windows Server 2012 and Windows Embedded 8 Standard ended on January 31, 2020. Market share had fallen to 1.06% by October 2020.</p>
          <p class="text17" id="text38a" onclick="change22()">Windows 8.1</p>
          <p class="text18" id="text38b">Windows 8.1 is a major release of the Windows NT operating system developed by Microsoft. It was released to manufacturing on August 27, 2013, and broadly released for retail sale on October 17, 2013, about a year after the retail release of its predecessor. It was Microsoft's operating system for use on personal computers, including home and business desktops, laptops, tablet PCs and media center PCs until it was succeeded by Windows 10 on July 29, 2015. Windows 8.1 was made available for download via MSDN and Technet and available as a free upgrade for retail copies of Windows 8 and Windows RT users via the Windows Store. A server counterpart was released on October 18, 2013, entitled Windows Server 2012 R2. Microsoft ended mainstream support for Windows 8.1 on January 9, 2018, and extended support will end on January 10, 2023.</p>
          <p class="text17" id="text39a" onclick="change23()">Windows 10</p>
          <p class="text18" id="text39b">Windows 10 is a major release of the Windows NT operating system developed by Microsoft. It is the successor to Windows 8.1, released nearly two years earlier, and was released to manufacturing on July 15, 2015, and broadly released for the general public on July 29, 2015. Windows 10 was made available for download via MSDN and Technet, as a free upgrade for retail copies of Windows 8 and Windows 8.1 users via the Windows Store, and to Windows 7 users via Windows Update. Windows 10 receives new builds on an ongoing basis, which are available at no additional cost to users, in addition to additional test builds of Windows 10, which are available to Windows Insiders. Devices in enterprise environments can receive these updates at a slower pace, or use long-term support milestones that only receive critical updates, such as security patches, over their ten-year lifespan of extended support. Windows 10 received mostly positive reviews upon its original release. Critics praised Microsoft's decision to provide a desktop-oriented interface in line with previous versions of Windows, contrasting the tablet-oriented approach of Windows 8, although Windows 10's touch-oriented user interface mode was criticized for containing regressions upon the touch-oriented interface of its predecessor. Critics also praised the improvements to Windows 10's bundled software over Windows 8.1, Xbox Live integration, as well as the functionality and capabilities of the Cortana personal assistant and the replacement of Internet Explorer with Microsoft Edge. However, media outlets have been critical of the changes to operating system behaviors, including mandatory update installation, privacy concerns over data collection performed by the OS for Microsoft and its partners, and adware-esque tactics used to promote the operating system on its release. Microsoft initially aimed to have Windows 10 installed on over a billion devices within three years of its release; that goal was ultimately reached almost five years after release on March 16, 2020. By January 2018, Windows 10 surpassed Windows 7 as the most popular version of Windows worldwide. As of June 2021, it is estimated that 79% of Windows PCs, 58% of all PCs (the rest being older Windows versions and other operating systems such as macOS and Linux), and 24% of all devices (including mobile, tablet and console) are running Windows 10.</p>
        </div>
    </div>
</div>
`
component.cuswin=`
<div id="a1">
<div class="a2">
    <img src="img/Untitled.png" class="image1" style="top:18%; left: 3%">
    <p class="text12">W10 -> W7</p>
    <p class="text13">Make Windows 10 looks like Windows 7</p>
    <div class="b1" style="top: 60%; right: 5%">
        <a href="MW10LLW7.html" class="b2">
           <p class="text16">READ</p>
        </a>
     </div>
</div>
<div class="a2">
    <img src="img/Screenshot (1).png" class="image1" style="top:15%; left: 3%;">
    <p class="text12">W10 start menu on W11</p>
    <p class="text13">For those who don't like W11's start menu</p>
    <div class="b1" style="top: 60%; right: 5%">
        <a href="W10SMOW11.html" class="b2">
           <p class="text16">READ</p>
        </a>
     </div>
</div>
<div class="a2">
    <img src="img/Screenshot (3).png" class="image1" style="top:15%; left: 3%;">
    <p class="text12">Rainmeter</p>
    <p class="text13">An app that allows you to customize your desktop</p>
    <div class="b1" style="top: 60%; right: 5%">
        <a href="Rainmeter.html" class="b2">
           <p class="text16">READ</p>
        </a>
     </div>
</div>
<div class="a2">
    <img src="img/10-xp.png" class="image1" style="top:15%; left: 3%;">
    <p class="text12">W10 -> WXP</p>
    <p class="text13">Makes Windows 10 looks like Windows XP</p>
    <div class="b1" style="top: 60%; right: 5%">
        <a href="MW10LLWXP.html" class="b2">
           <p class="text16">READ</p>
        </a>
     </div>
</div>
</div>
`
component.postsite=`
<div id="a1">
</div>
`
component.MW10LLWXP=`
<div id="a1">
            <img src="img/10-xp.png" id="image1" style="border-top: 10px solid purple;">
        <div style="width:90%; height:100%; margin:auto">
        <br><br><big><b><p id="text6">Make Windows 10 looks like Windows XP</p></b></big>
            <b><p id="text6">Preparation</p></b>
            <p id="text6">First, download these:</p>
            <a href="https://www.deviantart.com/sagorpirbd/art/XP-Themes-Final-for-Win10-520345860">Windows XP themes for Windows 10 (you need a DeviantArt account to download)</a><br>
            <a href="https://uxthemepatcher.com/">UXThemePatcher (you will need this because Windows doesn't allow 3rd-party themes)</a><br>
            <a href="https://github.com/Open-Shell/Open-Shell-Menu/releases">OpenShell (you will need this to customize Windows icon in the desktop and start menu)</a><br>
            <a href="https://winaero.com/downloads/classic_shell_xp_suite.zip">OpenShell - Windows XP Suite (you will need this to modify Windows 10's taskbar - you can also use the infamous Bliss picture for your desktop)</a><br>
            <b><p id="text6">Customize Windows 10</p></b>
            <p id="text6">First of all, install UXThemePatcher</p>
            <p id="text6">Secondly, you need to extract the "xp_themes_final_for_win10_by_sagorpirbd_d8lstfo.rar" file you have just downloaded from DeviantArt and go to XP Themes for Windows 10/Themes For 10 Build 14393 Anniversary Update and copy its content. After that, open Run by pressing Win+R at the same time and type %windir%/Resources/Themes/. Then, press Ctrl+V to paste the content. Next, go to Settings -> Personalization -> Themes and select one of Windows XP themes.</p>
            <p id="text6">Thirdly, you need to install OpenShell and extract "classic_shell_xp_suite.zip" file. Then go to Open-Shell in Start Menu and click Open-Shell menu settings. At the Start Button tab, check "Replace Start button". At Button look/Custom button/Button image, select "XPButton.png" in the folder you just got from extraction. Next, go to the tab called Taskbar and enable the "Customize taskbar" option. There, you will find a number of options which you need to change. Click the option "Taskbar texture" and then click the [...] button to browse for the file xp_bg.png that you extracted from the archive. In horizontal stretching below, set "Tile". </p>
            <p id="text6">Next, go to Start Menu Style tab and choose Classic style/Classic with two columns. Click "Select skin..." under that, next to "Skin:" choose Windows XP Luna. You can also make Bliss your desktop background also. This is the result you should get (source: WinAero)</p>
            <img id="image1" src="img/w10llwxp.png">
            <p id="text6">After that, hide Cortana icon/box by clicking right mouse button on the taskbar, go to Cortana and click Hidden.</p>
            <b><p id="text6">You can also disable Notification Center</p></b>
            <p id="text6">For Windows 10 Pro and Enterprise: Hit Win+R to start Run, type: gpedit.msc and hit Enter. Then under Local Computer Policy go to User Configuration > Administrative Templates > Start Menu and Taskbar. Then in the right pane scroll down and double-click Remove Notifications and Action Center. Next, select Enabled, click OK, and then sign out and back in again or restart your PC.</p>
            <p id="text6">For Windows 10 Home: Hit Win+R to start Run, type: Regedit and hit Enter. Go to HKEY_CURRENT_USER -> SOFTWARE -> Policies -> Microsoft -> Windows -> Explorer (If you don’t see it, you’ll need to create the key and name it Explorer. To do that, right-click on the Windows key and select New > Key). After you’ve created/seen the Explorer key, right-click in the right pane and create a new DWORD (32-bit) value and name it: DisableNotificationCenter and give it a value of 1. Then restart your PC.</p>
            <p id="text6">Although this doesn't look like Windows XP too much, it should remind you of it a bit :)</p>
            <i><b><p id="text6">I think this won't work on Windows 11 because Open-Shell icon only overlays the Start Menu icon, not replacing it; custom themes don't even work anymore</p></b></i><br><br>
        </div>
</div>
`
component.W10SMOW11=`
<div id="a1">
            <img src="img/Screenshot (1).png" id="image1" style="border-top: 10px solid purple;">
        <div style="width:90%; height:100%; margin:auto">
        <br><br><big><b><p id="text6">Change back to W10 start menu on W11</p></b></big>
        <p id="text6">Although Windows 11's start menu looks good, some features like Live Tiles will be missing. To go back to Windows 10's start menu, we need to: </p>
        <p id="text6">First, press Win + R to start Run. Then type regedit and press Enter. Go to this address: </p>
        <p id="text6">HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced.</p>
        <p id="text6">Right-click Advanced from the left pane and choose New -> DWORD (32-bit) Value. Rename the value to Start_ShowClassMode. Double click the same value and change the data to type 1 then press Enter.</p>
        <p id="text6">After that, close Registry Editor and restart/sign out. Your Start Menu will behave like Windows 10's :)</p><br><br>
        </div>
</div>
`
component.Rainmeter=`
<div id="a1">
            <img src="img/Screenshot (3).png" id="image1" style="border-top: 10px solid purple;">
        <div style="width:90%; height:100%; margin:auto">
        <br><br><big><b><p id="text6">Rainmeter</p></b></big>
        <p id="text6">Even though on Windows 10 you can tweak some elements on the interface, when you compare to the Gadget tool that was very successful on Windows 7 and Vista, the theme settings on Windows 10 are rather disappointing. It can only allow us to change the wallpaper, set the default color or switch to Dark Mode. There is not so much personalization in Windows 10 without the help of third party apps. One of them is Rainmeter.</p>
        <p id="text6">If you think your desktop looks too boring to satisfy your eyes, Rainmeter can help you redesign it. It should take a bit of your machine's resources, but you can create a good looking desktop for yourself, to do so, download Rainmeter <a href="https://www.rainmeter.net/">here</a></p>
        <p id="text6">After installing Rainmeter, you can start designing your desktop to your liking. You should unload the message in the middle of the screen by right click it and select Unload skin. To start designing, you have to open Rainmeter by clicking the icon at the right side of your taskbar and selecting Manage. You can load whatever you like onto your desktop and place it anywhere you like.</p>
        <p id="text6">You can get some themes on many websites, but I recommend <a href="https://visualskins.com/tag/themes/">Visualskins</a> and <a href="https://www.deviantart.com/rainmeter/gallery/23941137/skins">DeviantArt (you may need a DeviantArt account)</a>
        <p id="text6">For themes, I recommend <a href="https://visualskins.com/skin/inside-dream">Inside Dream</a>, <a href="https://www.deviantart.com/apexxx-sensei/art/Mond-762455575">Mond</a> and <a href="https://www.deviantart.com/apexxx-sensei/art/Ageo-788359446">Ageo</a>. Normally, the developers will pack them into a .rmskin file, and some of them will include their layouts. You may like to deselect them, or at least deselect "Apply included layout" to avoid losing your layout during the installation if you like yours.</p>
        <b><i><p id="text6">Rainmeter will start whenever you start your computer. It will help your desktop look less bland. I hope this post will help you design your desktop to your liking (I'm still enjoying my <a href="https://drive.google.com/file/d/1A4QsihnTGcGsbDoATBdbzSO5HPAl2TC3/view?usp=sharing">layout</a>, which is displayed in the picture above). Install Rainmeter now :)</p></i></b><br><br>
        </div>
</div>
`