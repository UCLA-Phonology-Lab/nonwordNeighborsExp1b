// This is a simple demo script, feel free to edit or delete it
// Find a tutorial and the list of availalbe elements at:
// https://www.pcibex.net/documentation/

PennController.ResetPrefix(null) // Shorten command names (keep this line here)

DebugOff()
Header(
// void
)
.log( "sonaID" , GetURLParameter("id") )


// Show the 'intro' trial first, then all the 'experiment' trials in a random order
// then send the results and finally show the trial labeled 'bye'
//Sequence( "intro","Instructions","init","instr2","Instructions2", randomize("experiment") , SendResults() , "bye" )
//Sequence( "welcome","questionnaire","Instructions","instr2","Instructions2",randomize("experiment_nw"),"middle_instructions",randomize("experiment_words") , "Debrief",SendResults() , "bye" )
//Sequence("Debrief")
Sequence("browsercheck","welcome","questionnaire","Instructions","instr2","Instructions2",randomize("experiment_nw"),"middle_instructions",randomize("experiment_words") , "Debrief",SendResults() , "final" )


InitiateRecorder("https://www.clairemoorecantwell.org/expFiles/soundsaver.php")
    .label("init")


// What is in Header happens at the beginning of every single trial
Header(
    // We will use this global Var element later to store the participant's name
    newVar("ParticipantName")
        .global()
    ,
    // Delay of 250ms before every trial
    newTimer(250)
        .start()
        .wait()
)
.log( "Name" , getVar("ParticipantName") )
// This log command adds a column reporting the participant's name to every line saved to the results

newTrial("browsercheck",
    defaultText
        .print()
    ,
    newText("<p>Welcome! Before we start, please make sure you are using Firefox or Chrome to complete the experiment. Other browsers, such as Safari or Edge may cause errors. Thank you!</p>").settings.css("font-size", "24")
        .center()
    ,
    newButton("I am using Firefox or Chrome")
        .print()
        .wait()

)

newTrial("welcome",
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>").settings.css("font-size", "24")
        .center()
    
    ,newText("<p>University of California, Los Angeles<p>")
        .settings.css("font-size", "18")
        .center()
    ,newText("<p>CONSENT TO PARTICIPATE IN RESEARCH<p>")
        .bold()
        .center()
        .settings.css("font-size", "24")
    ,newText("<p>Empirical Neighborhoods of Nonwords<p>")
        .italic()
        .center()
        .settings.css("font-size", "18")
    ,newText("<p>Dr. Claire Moore-Cantwell, from the Linguistics Department at the University of California, Los Angeles (UCLA) is conducting a research study in collaboration with Dr. Gaja Jarosz, from the Linguistics Department at the University of Massachusetts, Amherst.<p> <p>You were selected as a possible participant in this study because you are a native speaker of American English.  Your participation in this research study is voluntary.<p>").center().settings.css("font-size", "18")
    ,newButton("continue","Next")
        .center()
        .print()
        .wait()
    ,getButton("continue").remove()
    
    ,newText("<p>Why is this study being done?<p>").bold().center().settings.css("font-size", "24")
    ,newText("<p>We want to find out what your brain does when you hear a word that sounds like a word of English, but is not.  We know that typically, your brain accesses a real word that sounds similar, but in this study we hope to find out what exactly counts as 'similar'.  The answer to this question will help us understand better how people perceive speech, and will also help us understand how rules about how a language should sound interact with actual words of the language.<p>").settings.css("font-size", "18")
    ,newText("<p>What will happen if I take part in this research study?<p>").bold().center().settings.css("font-size", "24")
    ,newText("<p>    If you volunteer to participate in this study, the researcher will ask you to do the following:<p>").settings.css("font-size", "18")
    ,newText("<p>    •	Complete a language background questionnaire<p> <p>     •	Listen to made-up words of English. <p> <p>     •  Type real words that each made-up word makes you think of <p>").settings.css("font-size", "18")
    ,newButton("continue6","Next")
        .center()
        .print()
        .wait()
    ,getButton("continue6").remove()
    
    ,newText("<p>How long will I be in the research study?<p>").bold().center().settings.css("font-size", "24")
    ,newText("<p>    Participation will take 30-60 minutes.<p>").settings.css("font-size", "18")
    ,newText("<p>Are there any potential risks or discomforts that I can expect from this study?<p>").bold().center().settings.css("font-size", "24")
    ,newText("<p>    There are no anticipated risks or discomforts.<p>").settings.css("font-size", "18")
    ,newText("<p>Are there any potential benefits if I participate?<p>").bold().center().settings.css("font-size", "24")
    ,newText("<p>    You will not directly benefit from your participation in the research.<p>").settings.css("font-size", "18")
        ,newButton("continue5","Next")
        .center()
        .print()
        .wait()
    ,getButton("continue5").remove()
    
    ,newText("<p>What other choices do I have if I choose not to participate?<p>").bold().center().settings.css("font-size", "24")
    ,
    newText("<p>    If you choose not to participate in this study, you may still receive credit for your course by choosing from a different study on SONA, or if you choose not to participate in any studies, you should contact your professor for alternative ways to receive credit.<p>")
        .settings.css("font-size", "18")
    ,
    newText("<p>Will I be paid for participating?<p>")
        .bold()
        .center()
        .settings.css("font-size", "24")
    ,
    newText("<p>    You will receive 1 SONA credit for this study<p>")
        .settings.css("font-size", "18")
    
        ,newButton("continue4","Next")
        .center()
        .print()
        .wait()
    ,getButton("continue4").remove()
    ,
    newText("<p>Will information about me and my participation be kept confidential?<p>")
        .bold()
        .center()
        .settings.css("font-size", "24")
    ,
    newText("<p>    Any information that is obtained in connection with this study and that can identify you will remain confidential. It will be disclosed only with your permission or as required by law.  Identifying information such as your name, student ID number, and birth date will be kept on the secure SONA server.<p> <p>The researchers will do their best to make sure that your private information is kept confidential. Information about you will be handled as confidentially as possible, but participating in research may involve a loss of privacy and the potential for a breach in confidentiality. Study data will be physically and electronically secured.  As with any use of electronic means to store data, there is a risk of breach of data security. Your data, including de-identified data may be kept for use in future research.<p>")
        .settings.css("font-size", "18")
    ,
    newText("<p>What are my rights if I take part in this study?<p>")
        .bold()
        .center()
        .settings.css("font-size", "24")
    ,
    newText("<p>    •	You can choose whether or not you want to be in this study, and you may withdraw your consent and discontinue participation at any time.<p> <p>    •	Whatever decision you make, there will be no penalty to you, and no loss of benefits to which you were otherwise entitled.<p> <p>   •	You may refuse to answer any questions that you do not want to answer and still remain in the study.<p>")
        .settings.css("font-size", "18")
    
        ,newButton("continue3","Next")
        .center()
        .print()
        .wait()
    ,getButton("continue3").remove()
    ,
    newText("<p>Who can I contact if I have questions about this study?<p>")
        .bold()
        .center()
        .settings.css("font-size", "24")
    ,
    newText("<p>  •   The research team:<p>")
        .bold()
        .settings.css("font-size", "20")
    ,
    newText("<p>    If you have any questions, comments or concerns about the research, you can talk to the one of the researchers. Please contact: <p><p><p>Dr. Claire Moore-Cantwell<p><p>559-760-7071<p><p>moore.cantwell@ucla.edu<p>")
        .settings.css("font-size", "18")
    ,
    newText("<p>•	UCLA Office of the Human Research Protection Program (OHRPP):<p>")
        .bold()
        .settings.css("font-size", "20")
    ,
    newText("<p>    If you have questions about your rights as a research subject, or you have concerns or suggestions and you want to talk to someone other than the researchers, you may contact the UCLA OHRPP by phone: (310) 206-2040; by email: participants@research.ucla.edu or by mail: Box 951406, Los Angeles, CA 90095-1406.<p>")
        .settings.css("font-size", "18")
    ,
    //newText("<p> Please input your Subject Code:<p>")
    //    .bold()
    //    .settings.css("font-size", "20")
    //,
    //newTextInput("inputID")
    //    .print()
    //,
    newButton("Start")
        .print()
        .wait()

)




newTrial( "intro" ,

    newText("<p>Welcome to our demo experiment!</p><p>Please enter your name , or a random string of characters, below and press Enter:</p>")
        .print()
    ,
    newTextInput()
        .print()
        .wait()                 // The next command won't be executed until Enter is pressed
        .setVar( "ParticipantName" )
        // This setVar command stores the value from the TextInput element into the Var element
)

newTrial("questionnaire",
    newText("sel","<p>You must select an option before continuing<p>"),
    newText("<p>Please tell us about all the languages you speak well enough to have a simple conversation.</p><p>(If you have always spoken a language, answer 'zero' as the age you started)</p>")
        .print()
    ,
    newText("<p>English:</p>")
        .print()
    ,
    newText("At what age did you start learning English?")
    ,
    newTextInput("englishAge","0")
        .log()
        .lines(0)
        .size(50,20)
        .print()
    ,
    newDropDown("englishOften","How often do you speak it?")
        .add("Every day","A few times a week","Once a week","Once a month","Almost never")
        .log()
        .print()
    ,
    newDropDown("englishWell","How well do you speak it?")
        .add("Extremely fluent","Not bad","Only very simple conversations")
        .log()
        .print()
    ,
    newButton("exit","Done!")
        .callback(
            getDropDown("englishOften")
                .test.selected()
                    .failure(getText("sel").print())
                    .success(
                        getDropDown("englishWell")
                            .test.selected()
                            .failure(getText("sel").print())
                            .success(end())))
        .print()
    ,

    newButton("add","Add Another")
        .print()
        .wait(getDropDown("englishOften").test.selected().failure(getText("sel").print()).and(getDropDown("englishWell").test.selected().failure(getText("sel").print())))
    ,
    newText("lgname","<p>Please enter the name of the language</p>"),

    newText("name","<p>Please type the language name:</p>"),
    newText("age","<p>At what age did you start learning this language?</p>"),
    
    getText("sel").remove(),
    getButton("add").remove(),
    getButton("exit").remove(),
    newText("<p><p><p><p>").print(),
    
    getText("name").print(),
    newTextInput("lg2","")
        .log()
        .lines(0)
        .size(200,20)
        .print()
    ,
   getText("age").print()
    ,
    newTextInput("lg2Age","0")
        .log()
        .lines(0)
        .size(50,20)
        .print()
    ,
    newDropDown("lg2Often","How often do you speak this language?")
        .add("Every day","A few times a week","Once a week","Once a month","Almost never")
        .log()
        .print()
    ,
    newDropDown("lg2Well","How well do you speak it?")
        .add("Extremely fluent","Not bad","Only very simple conversations")
        .log()
        .print()
    ,
    newButton("exit","Done!")
        .callback(
            getTextInput("lg2")
                .test.text(/.+/)
                    .failure(getText("lgname").print())
                    .success(
            getDropDown("lg2Often")
                .test.selected()
                    .failure(getText("sel").print())
                    .success(
                        getDropDown("lg2Well")
                            .test.selected()
                            .failure(getText("sel").print())
                            .success(end()))))
        .print()
    ,

    newButton("add2","Add Another")
        .print()
        .wait(getTextInput("lg2").test.text(/.+/).failure(getText("lgname").print()).and(getDropDown("lg2Often").test.selected().failure(getText("sel").print())).and(getDropDown("lg2Well").test.selected().failure(getText("sel").print())))
    ,
    getText("lgname").remove(),
    getText("sel").remove(),
    getButton("add").remove(),
    getButton("exit").remove(),
    newText("<p><p><p><p>").print(),
    
    getText("name").print(),
    newTextInput("lg3","")
        .log()
        .lines(0)
        .size(200,20)
        .print()
    ,
    getText("age").print()
    ,
    newTextInput("lg3Age","0")
        .log()
        .lines(0)
        .size(50,20)
        .print()
    ,
    newDropDown("lg3Often","How often do you speak this language?")
        .add("Every day","A few times a week","Once a week","Once a month","Almost never")
        .log()
        .print()
    ,
    newDropDown("lg3Well","How well do you speak it?")
        .add("Extremely fluent","Not bad","Only very simple conversations")
        .log()
        .print()
    ,
    newButton("exit","Done!")
        .callback(
            getTextInput("lg3")
                .test.text(/.+/)
                    .failure(getText("lgname").print())
                    .success(
            getDropDown("lg3Often")
                .test.selected()
                    .failure(getText("sel").print())
                    .success(
                        getDropDown("lg3Well")
                            .test.selected()
                            .failure(getText("sel").print())
                            .success(end()))))
        .print()
    ,

    newButton("add3","Add Another")
        .print()
        .wait(getTextInput("lg3").test.text(/.+/).failure(getText("lgname").print()).and(getDropDown("lg3Often").test.selected().failure(getText("sel").print())).and(getDropDown("lg3Well").test.selected().failure(getText("sel").print())))
    ,
    getText("lgname").remove(),
    getText("sel").remove(),
    getButton("add").remove(),
    getButton("exit").remove(),
    newText("<p><p><p><p>").print(),
    
    getText("name").print(),
    newTextInput("lg4","")
        .log()
        .lines(0)
        .size(200,20)
        .print()
    ,
    getText("age").print()
    ,
    newTextInput("lg4Age","0")
        .log()
        .lines(0)
        .size(50,20)
        .print()
    ,
    newDropDown("lg4Often","How often do you speak this language?")
        .add("Every day","A few times a week","Once a week","Once a month","Almost never")
        .log()
        .print()
    ,
    newDropDown("lg4Well","How well do you speak it?")
        .add("Extremely fluent","Not bad","Only very simple conversations")
        .log()
        .print()
    ,
    newButton("exit","Done!")
        .callback(
            getTextInput("lg4")
                .test.text(/.+/)
                    .failure(getText("lgname").print())
                    .success(
            getDropDown("lg4Often")
                .test.selected()
                    .failure(getText("sel").print())
                    .success(
                        getDropDown("lg4Well")
                            .test.selected()
                            .failure(getText("sel").print())
                            .success(end()))))
        .print()
    ,

    newButton("add4","Add Another")
        .print()
        .wait(getTextInput("lg4").test.text(/.+/).failure(getText("lgname").print()).and(getDropDown("lg4Often").test.selected().failure(getText("sel").print())).and(getDropDown("lg4Well").test.selected().failure(getText("sel").print())))

    ,
    getText("lgname").remove(),
    getText("sel").remove(),
    getButton("add").remove(),
    getButton("exit").remove(),
    newText("<p><p><p><p>").print(),
    
    getText("name").print(),
    newTextInput("lg5","")
        .log()
        .lines(0)
        .size(200,20)
        .print()
    ,
    getText("age").print()
    ,
    newTextInput("lg5Age","0")
        .log()
        .lines(0)
        .size(50,20)
        .print()
    ,
    newDropDown("lg5Often","How often do you speak this language?")
        .add("Every day","A few times a week","Once a week","Once a month","Almost never")
        .log()
        .print()
    ,
    newDropDown("lg5Well","How well do you speak it?")
        .add("Extremely fluent","Not bad","Only very simple conversations")
        .log()
        .print()
    ,
    newButton("exit","Done!")
        .callback(
            getTextInput("lg5")
                .test.text(/.+/)
                    .failure(getText("lgname").print())
                    .success(
            getDropDown("lg5Often")
                .test.selected()
                    .failure(getText("sel").print())
                    .success(
                        getDropDown("lg5Well")
                            .test.selected()
                            .failure(getText("sel").print())
                            .success(end()))))
        .print()
    ,

    newButton("add5","Add Another")
        .print()
        .wait(getTextInput("lg5").test.text(/.+/).failure(getText("lgname").print()).and(getDropDown("lg5Often").test.selected().failure(getText("sel").print())).and(getDropDown("lg5Well").test.selected().failure(getText("sel").print())))
    ,
    getText("lgname").remove(),
    getText("sel").remove(),
    getButton("add").remove(),
    getButton("exit").remove(),
    newText("<p><p><p><p>").print(),
    
    getText("name").print(),
    newTextInput("lg6","")
        .log()
        .lines(0)
        .size(200,20)
        .print()
    ,
    getText("age").print()
    ,
    newTextInput("lg6Age","0")
        .log()
        .lines(0)
        .size(50,20)
        .print()
    ,
    newDropDown("lg6Often","How often do you speak this language?")
        .add("Every day","A few times a week","Once a week","Once a month","Almost never")
        .log()
        .print()
    ,
    newDropDown("lg6Well","How well do you speak it?")
        .add("Extremely fluent","Not bad","Only very simple conversations")
        .log()
        .print()
    ,
    newButton("exit","Done!")
        .callback(
            getTextInput("lg6")
                .test.text(/.+/)
                    .failure(getText("lgname").print())
                    .success(
            getDropDown("lg6Often")
                .test.selected()
                    .failure(getText("sel").print())
                    .success(
                        getDropDown("lg6Well")
                            .test.selected()
                            .failure(getText("sel").print())
                            .success(end()))))
        .print()
    ,

    newButton("add6","Add Another")
        .print()
        .wait(getTextInput("lg6").test.text(/.+/).failure(getText("lgname").print()).and(getDropDown("lg6Often").test.selected().failure(getText("sel").print())).and(getDropDown("lg6Well").test.selected().failure(getText("sel").print())))
    ,
    getText("lgname").remove(),
    getText("sel").remove(),
    getButton("add").remove(),
    getButton("exit").remove(),
    newText("<p><p><p><p>").print(),
    
    getText("name").print(),
    newTextInput("lg7","")
        .log()
        .lines(0)
        .size(200,20)
        .print()
    ,
    getText("age").print()
    ,
    newTextInput("lg7Age","0")
        .log()
        .lines(0)
        .size(50,20)
        .print()
    ,
    newDropDown("lg7Often","How often do you speak this language?")
        .add("Every day","A few times a week","Once a week","Once a month","Almost never")
        .log()
        .print()
    ,
    newDropDown("lg7Well","How well do you speak it?")
        .add("Extremely fluent","Not bad","Only very simple conversations")
        .log()
        .print()
    ,
    newButton("exit","Done!")
        .callback(
            getTextInput("lg7")
                .test.text(/.+/)
                    .failure(getText("lgname").print())
                    .success(
            getDropDown("lg7Often")
                .test.selected()
                    .failure(getText("sel").print())
                    .success(
                        getDropDown("lg7Well")
                            .test.selected()
                            .failure(getText("sel").print())
                            .success(end()))))
        .print()
    ,

    newButton("add7","Add Another")
        .print()
        .wait(getTextInput("lg7").test.text(/.+/).failure(getText("lgname").print()).and(getDropDown("lg7Often").test.selected().failure(getText("sel").print())).and(getDropDown("lg7Well").test.selected().failure(getText("sel").print())))
    ,
    getText("lgname").remove(),
    getText("sel").remove(),
    getButton("add").remove(),
    getButton("exit").remove(),
    newText("<p><p><p><p>").print(),
    
    getText("name").print(),
    newTextInput("lg8","")
        .log()
        .lines(0)
        .size(200,20)
        .print()
    ,
    getText("age").print()
    ,
    newTextInput("lg8Age","0")
        .log()
        .lines(0)
        .size(50,20)
        .print()
    ,
    newDropDown("lg8Often","How often do you speak this language?")
        .add("Every day","A few times a week","Once a week","Once a month","Almost never")
        .log()
        .print()
    ,
    newDropDown("lg8Well","How well do you speak it?")
        .add("Extremely fluent","Not bad","Only very simple conversations")
        .log()
        .print()
    ,
    newButton("exit","Done!")
        .callback(
            getTextInput("lg8")
                .test.text(/.+/)
                    .failure(getText("lgname").print())
                    .success(
            getDropDown("lg8Often")
                .test.selected()
                    .failure(getText("sel").print())
                    .success(
                        getDropDown("lg8Well")
                            .test.selected()
                            .failure(getText("sel").print())
                            .success(end()))))
        .print()
    ,

    newButton("add8","Add Another")
        .print()
        .wait(getTextInput("lg8").test.text(/.+/).failure(getText("lgname").print()).and(getDropDown("lg8Often").test.selected().failure(getText("sel").print())).and(getDropDown("lg8Well").test.selected().failure(getText("sel").print())))
    ,
    getText("lgname").remove(),
    getText("sel").remove(),
    getButton("add").remove(),
    getButton("exit").remove(),
    newText("<p><p><p><p>").print(),
    
    getText("name").print(),
    newTextInput("lg9","")
        .log()
        .lines(0)
        .size(200,20)
        .print()
    ,
    getText("age").print()
    ,
    newTextInput("lg9Age","0")
        .log()
        .lines(0)
        .size(50,20)
        .print()
    ,
    newDropDown("lg9Often","How often do you speak this language?")
        .add("Every day","A few times a week","Once a week","Once a month","Almost never")
        .log()
        .print()
    ,
    newDropDown("lg9Well","How well do you speak it?")
        .add("Extremely fluent","Not bad","Only very simple conversations")
        .log()
        .print()
    ,
    newButton("exit","Done!")
        .callback(
            getTextInput("lg9")
                .test.text(/.+/)
                    .failure(getText("lgname").print())
                    .success(
            getDropDown("lg9Often")
                .test.selected()
                    .failure(getText("sel").print())
                    .success(
                        getDropDown("lg9Well")
                            .test.selected()
                            .failure(getText("sel").print())
                            .success(end()))))
        .print()
    ,

    newButton("add9","Add Another")
        .print()
        .wait(getTextInput("lg9").test.text(/.+/).failure(getText("lgname").print()).and(getDropDown("lg9Often").test.selected().failure(getText("sel").print())).and(getDropDown("lg9Well").test.selected().failure(getText("sel").print())))
    ,
    getText("lgname").remove(),
    getText("sel").remove(),
    getButton("add").remove(),
    getButton("exit").remove(),
    newText("<p><p><p><p>").print(),
    
    getText("name").print(),
    newTextInput("lg10","")
        .log()
        .lines(0)
        .size(200,20)
        .print()
    ,
    getText("age").print()
    ,
    newTextInput("lg10Age","0")
        .log()
        .lines(0)
        .size(50,20)
        .print()
    ,
    newDropDown("lg10Often","How often do you speak this language?")
        .add("Every day","A few times a week","Once a week","Once a month","Almost never")
        .log()
        .print()
    ,
    newDropDown("lg10Well","How well do you speak it?")
        .add("Extremely fluent","Not bad","Only very simple conversations")
        .log()
        .print()
    ,
    newButton("exit","Done!")
        .callback(
            getTextInput("lg10")
                .test.text(/.+/)
                    .failure(getText("lgname").print())
                    .success(
            getDropDown("lg10Often")
                .test.selected()
                    .failure(getText("sel").print())
                    .success(
                        getDropDown("lg10Well")
                            .test.selected()
                            .failure(getText("sel").print())
                            .success(end()))))
        .print()
    ,

    newButton("add4","Add Another")
        .print()
        .wait(getTextInput("lg10").test.text(/.+/).failure(getText("lgname").print()).and(getDropDown("lg10Often").test.selected().failure(getText("sel").print())).and(getDropDown("lg10Well").test.selected().failure(getText("sel").print())))


)


newTrial( "Instructions" ,

    newText("instructions1","<p>In this study, you will hear a series of fake words.</p><p>For each one, we'd like you to tell us a real word that sounds similar. </p><p>For example:</p>")
    ,
    newCanvas("instr",600,150)
        .center()
        .add("center at 50%",0,getText("instructions1"))
        .print()
    ,
    newAudio("kaksis","https://www.clairemoorecantwell.org/expFiles/kaksis.wav")
        .center()
        .print()
        .wait()
    ,
    newText("cactus","<p>For this one, you might think of 'cactus'</p>").center().print()
    ,
    newTimer("paws",750)
        .start()
        .wait()
    ,
    newText("axis","<p>Or maybe 'axis'</p>").center().print()
    ,
    getTimer("paws")
        .start()
        .wait()
    ,
    newText("donworry","<p>Don't worry if you thought of a different word here.</p><p>There are many possible answers to each one.</p>").center().print()
    ,
    newButton("continue","next")
        .center()
        .print()
        .wait()
)
newTrial("instr2",
    
    newText("<p>Here are some more examples, to give you the idea:</p>")
        .center()
        .print()
    ,
    newAudio("zinkle","https://www.clairemoorecantwell.org/expFiles/zinkle.wav")
        .center()
        .print()
        .wait()
    ,
        newText("<p>Maybe 'amazing'?</p>").center().print()
    ,
    newTimer("paws",750)
        .start()
        .wait()
    ,
    newAudio("vasis","https://www.clairemoorecantwell.org/expFiles/vasis.wav")
        .center()
        .print()
        .wait()
    ,
        newText("<p>Maybe 'vase'?</p>").center().print()
    ,
    getTimer("paws")
        .start()
        .wait()
    ,
    newAudio("camern","https://www.clairemoorecantwell.org/expFiles/camern.wav")
        .center()
        .print()
        .wait()
    ,
        newText("<p>Maybe 'camera'? or 'Cameroon'?</p>").center().print()
    ,
    getTimer("paws")
        .start()
        .wait()
    ,
    newAudio("charny","https://www.clairemoorecantwell.org/expFiles/charny.wav")
        .center()
        .print()
        .wait()
    ,
        newText("<p>Maybe 'Charlie'? or 'charcoal'?</p>").center().print()
    ,
    getTimer("paws")
        .start()
        .wait()
    ,
    newButton("cont","Next")
        .center()
        .print()
        .wait()
)


newTrial("Instructions2",
    newText("1","<p>After hearing the fake word, try to think of a real word as quickly as possible.  Any English word is fine, including names or proper nouns.   We're interested in your intuition here, so go with your gut.  There are no wrong answers!</p><p> As soon as you think of a word, press the button, and be as quick as possible.  On the next screen, you can take your time to type the word you thought of.<p><p>(You might think of other words later, but please type the original one you thought of!)<p>")
    ,
    newCanvas("text",600,300)
        .center()
        .add("center at 50%",0,getText("1"))
        .print()
     ,
    newButton("ok","Let's go!")
        .center()
        .print()
        .wait()
    ,
    getButton("ok")
        .remove()
    ,
    getCanvas("text")
        .remove()
)

// This Template command generates as many trials as there are rows in myTable.csv
Template( "myTable.csv" ,
    // Row will iteratively point to every row in myTable.csv
    row => newTrial( "experiment_nw" ,
    newText("<p>As quickly as you can, think of a word that sounds similar</p>")
        .center()
        .print()
    ,
    newButton("Go")
        .center()
        .print()
        .log()
        .wait()
    ,
    getButton("Go")
    .remove()
    ,
    newButton("Got it!")
        .center()
        .print()
        .callback(
            newTimer("buffer",200).start().wait()
            ,getAudio("sound").test.playing()
                    .success(
                        self.stop()
                    )
            ,getTimer("wait").stop()
                )
        .log()
    ,
    
    //Present an audio file
    newAudio("sound","https://www.clairemoorecantwell.org/expFiles/"+row.Filename)
        .play()
        .wait()
    ,
    newTimer("wait",5000)
        .start()
        .wait()
    ,
    getButton("Got it!")
        .remove()
    ,
    getText("<p>As quickly as you can, think of a word that sounds similar</p>")
        .remove()
    ,
    newText("<p>Please type the word you thought of:<p>")
        .center()
        .print()
    ,
    newTextInput("resp")
        .center()
        .print()
        .log()
    ,
    newButton("Continue...")
        .center()
        .print()
        .wait()
    ,
    getButton("Continue...")
    .remove()
    )
    .log( "item" , row.item )
    .log("itemNo", row.itemNo)
    .log( "Filename" , row.Filename )
    .log("nDensCond", row.nDensCond)
    .log("w_nw",row.w_nw)
    .log("editCond",row.editCond)
    .log("entropyCond",row.entropyCond)
    .log("neighbors",row.neighbors)
    .log("log_f_subtlex",row.log_f_subtlex)
    .log("entropy",row.entropy)
    .log("earliestedit",row.earliestedit)
    .log("latestedit",row.latestedit)
    .log("aveedit",row.aveedit)
    .log("avg_edit_similarity",row.avg_edit_similarity)
    .log("GNM",row.GNM)
    .log("uniqueness",row.uniqueness)
    .log("cohortsize",row.cohortsize)
    
)



newTrial("middle_instructions",
    newText("1","<p>For the rest of the study, you'll hear real words. Please respond as before, with another real word that the word you heard sounds similar to. Any English word is fine, including names or proper nouns. <p> We're interested in the sound here, not the meaning. Here's an example:</p>")
    ,
    newCanvas("text",600,300)
        .center()
        .add("center at 50%",0,getText("1"))
        .print()
     ,
    newAudio("story","https://www.clairemoorecantwell.org/expFiles/STORY.wav")
        .center()
        .print()
        .wait()
    ,
    newText("stormy","<p>For this one, you might think of 'stormy'</p>").center().print()
    ,
    newTimer("paws",750)
        .start()
        .wait()
    ,
    newText("store","<p>Or maybe 'store'</p>").center().print()
    ,
    newTimer("paws",750)
        .start()
        .wait()
    ,
    newText("avoid","<p>Try to avoid answers based on meaning, like 'character', 'plot', 'tell', etc.</p>").center().print()
    ,    
    newText("gut","<p>Remember we are interested in your intuition, so go with your gut.  There are no wrong answers!</p>").center().print()
    ,     
    newButton("ok","Let's go!")
        .center()
        .print()
        .wait()
    ,
    getButton("ok")
        .remove()
    ,
    getCanvas("text")
        .remove()

)


// This Template command generates as many trials as there are rows in myTable.csv
Template( "myTable2.csv" ,
    // Row will iteratively point to every row in myTable.csv
    row => newTrial( "experiment_words" ,
    newText("<p>As quickly as you can, think of another word that sounds similar</p>")
        .center()
        .print()
    ,
    newButton("Go")
        .center()
        .print()
        .log()
        .wait()
    ,
    getButton("Go")
    .remove()
    ,
    newButton("Got it!")
        .center()
        .print()
        .callback(
            newTimer("buffer",200).start().wait()
            ,getAudio("sound").test.playing()
                    .success(
                        self.stop()
                    )
            ,getTimer("wait").stop()
                )
        .log()
    ,
    
    //Present an audio file
    newAudio("sound","https://www.clairemoorecantwell.org/expFiles/"+row.Filename)
        .play()
        .wait()
    ,
    newTimer("wait",5000)
        .start()
        .wait()
    ,
    getButton("Got it!")
        .remove()
    ,
    getText("<p>As quickly as you can, think of another word that sounds similar</p>")
        .remove()
    ,
    newText("<p>Please type the word you thought of:<p>")
        .center()
        .print()
    ,
    newTextInput("resp")
        .center()
        .print()
        .log()
    ,
    newButton("Continue...")
        .center()
        .print()
        .wait()
    ,
    getButton("Continue...")
    .remove()
    )
    .log( "item" , row.item )
    .log("itemNo", row.itemNo)
    .log( "Filename" , row.Filename )
    .log("nDensCond", row.nDensCond)
    .log("w_nw",row.w_nw)
    .log("editCond",row.editCond)
    .log("entropyCond",row.entropyCond)
    .log("neighbors",row.neighbors)
    .log("log_f_subtlex",row.log_f_subtlex)
    .log("entropy",row.entropy)
    .log("earliestedit",row.earliestedit)
    .log("latestedit",row.latestedit)
    .log("aveedit",row.aveedit)
    .log("avg_edit_similarity",row.avg_edit_similarity)
    .log("GNM",row.GNM)
    .log("uniqueness",row.uniqueness)
    .log("cohortsize",row.cohortsize)
    
)




newTrial("Debrief",
    
    newText("<p>You're all done!  Please answer the questions below, and then click 'Finish' to get credit.<p>")
        .center()
        .print()
    ,
    newText("<p>Did you have any specific strategies to find similar words?<p>")
        .center()
        .print()
    ,
    newTextInput("strategies")
        .center()
        .print()
        .log()
    ,
    newText("<p>What did you do when you thought of multiple words at the same time?<p>")
        .center()
        .print()
    ,
    newTextInput("multiples")
        .center()
        .print()
        .log()
    ,
    newText("<p>Do you have any other feedback for us?<p>")
        .center()
        .print()
    ,
    newTextInput("other")
        .center()
        .print()
        .log()
    ,
    newButton("Finish")
        .center()
        .print()
        .wait()

)

// Spaces and linebreaks don't matter to the script: we've only been using them for the sake of readability
newTrial( "final" ,
     newText("<p>Thank you for your participation!</p>")
                .center()
           .print()
    ,
    newText("<p><a href='https://ucla.sona-systems.com/webstudy_credit.aspx?experiment_id=2651&credit_token=d5be949139af42a4b59eee8de2914eca&survey_code="+ GetURLParameter("id")+"' target='_blank'>Click here to confirm your participation on SONA.</a></p> <p>This is a necessary step in order for you to receive participation credit!</p>")
    .center()
    .print()
    ,
    newButton("void")
    .wait()
    )
.setOption( "countsForProgressBar" , false )
// Make sure the progress bar is full upon reaching this last (non-)trial
