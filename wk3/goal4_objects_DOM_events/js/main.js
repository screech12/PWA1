/*
    PWA1: Goal 4: Course Material 4

	1. Objects
	2. Document Object Model
	3. Events and Callbacks
*/

// application scope (self-executing function)
(function(){


/*	==================================================================
	Objects
	------------------------------------------------------------------
		
	- objects are collections of keys and values for storing data {KEY : Value} pairings, also 
		known as associative pairing
 
	- arrays and objects are both used to store multiple values 
		arrays vs objects:  
 			1.  arrays store by numerical index
 			2.  objects store by a key index
	
	- keys in objects are names (similar to variables), used to index a value inside the object

	-similar to making an array, we declare the object’s properties inside the literal, separating by comma...
*/
console.log('------Objects ----------');

//{KEY : Value} pairings,

//             KEY    VALUE
    person = {'name':'bond', 'age':35, 'secretAgent':true};

    //                 OR

    person = {name:'bond', age:35, secretAgent:true};

/* accessing object properties
     - below are 3 ways you can access the property information in an object
         1. dot notation
         2. index notation using a variable as the index VAR[]
         3. index notation using a string

     - also keep in mind that since the keys can be strings, you could access the keys using string variables
 */


//    var personAge = 'age';
////                1               2
//    console.log(person.name, person[personAge],
//        //   3
//        person['secretAgent']);//bond 35 true
//
//// setter
//
//    person['age'] = '40'; //2
//    person.name = "JamesBond";//1
//    console.log(person);//Object {name: "JamesBond", age: "40", secretAgent: true}
//
//
////nested objects, OBJECT WITHIN AN OBJECT
//    // not using information directly from above for this example
//
//    person = {birthday:{month:02, day:12}, name:'bond'};
//    console.log(person);//Object {birthday: Object, name: "bond"}
//    //birthday: Object
//    //day: 12
//    //month: 2
//    console.log(person['birthday']['month']);//2, nav down to birthday, nav down to month (just like a file tree)
//    console.log(person.birthday.month);//1. dot notation

//---------------------------------------------

// Object within an object

console.log('------Object within an object, Arrays, Function ----------');

//property
    var thatGuy ={
        name: 'JamesBond',
        course: 'PWA1',
        address:{
            num: 3000,
            street: 'University',
            city: 'Orlando',
            cornerOf:['University', 'Semoran']
        },// above is setting up, bottom is show.
        //function
        showMyAddress: function(){
            var addr = this.address.street +',' + this.address.city;
            return addr;
        }
    };

    console.log(thatGuy.showMyAddress());//University,Orlando

    console.log(thatGuy.address.street + ',' + thatGuy.address.city);//University,Orlando

//properties & methods
/*
	- objects are useful primarily for properties and methods:
		- properties are variable/keys that belong to an object only
		- methods are function/keys that belong to the object only 
		= these members are the foundation of an oop model
*/

console.log('------Objects - properties & methods ----------');
    //PROPERTY + FUNCTIONS = METHODS

//Method 1 "Basic"

    var fsStudent = {};//object
    fsStudent.age = 22;// We than create the object
    fsStudent.career = 'Web Dev';

    fsStudent.sayHello = function(){
        console.log('Hello!');//Create method

    };


// above, we first initialize the object, then we created 2 properties 
//   for the object, and a method called sayHello - notice that the method is 
//	 being created by an assignment operator, just like the properties.

// we can also access the methods and properties of an object using  [ ] , 
// 	by using their name as a string - all of the below are valid:
    fsStudent.sayHello();//without this added will not display console log //Hello
    fsStudent['sayHello']();// index notation //Hello

    console.log(fsStudent.age);//22
    console.log(fsStudent['age']);// index notation //22



/* --------------
Method 2 "OBJECT Literal"

	- we can also use the object literal syntax to create a new object and 
		fill it at the same time.

	- below is the same object as in Method 1
*/


        var fsStudent = {
            age: 22,
            career: 'Web Dev',
            sayHello: function(){
                console.log('Hello!');
            }
        };

        fsStudent.sayHello();
        fsStudent['sayHello']();

        console.log(fsStudent.age);
         console.log(fsStudent['age']);

//---------------------------------------------


/******************************************************************************
STUDENT ACTIVITY 1:

	PART 1:
	1.  Create an object that has the following keys.
         a. schoolName (i.e "Full Sail")
         b. address  (i.e "123 University Ave")
         c. studentCount (i.e 16000)
         d. students (use an array of objects) - create at least 3 objects in the array)
             i. name (i.e "James Bond")
             ii. GPA (i.e 3.9)
             iii. classes (use an array with the ability to store at least 2 class names)
                    (i.e ['PWA1', 'PWA2'])

        2.	console.log the following
             a. school name in both the dot syntax and index syntax
             b  create a variable name "newCnt" that is equal to studentCount, and console.log
                    the studentCount using the newCnt variable.
             c.  console.log the address using index syntax
             d. one student's GPA using dot syntax and index syntax
 ----------------------------------------------------------------------------- */

console.log('------ STUDENT ACTIVITY - ANSWERS BELOW ----------');

// this is integrating multiple data types - object with an array of objects

  var obj1 = {
      schoolName: 'Full Sail',
      address: '123 University Ave',
      studentCount:16000,
      students:[
        {name: 'John Smith', GPA: 3.5, classes:['PWA1', 'PWA2']},
        {name: 'Steven Hope', GPA: 4.0},
        {name: 'Pam Kitti', GPA: 3.9}
    ]

    };

    console.log(obj1.schoolName);//dot syntax Full Sail
    console.log(obj1['schoolName']); //index syntax

    var newCnt = 'studentCount';


    console.log(obj1[newCnt]);//16000

    var fieldName1 = "address";
    console.log(obj1[fieldName1]);//123 University Ave

    console.log('Steven Hope',obj1.students[1].GPA);//Steven Hope 4
    console.log('Steven Hope',obj1['students'][1]['GPA']);

     /*----------------------------------------------------------------------------
 STUDENT ACTIVITY 2:

    1.  Using the above code, create a function that will find the average grade
        a. create an ANONYMOUS FUNCTION named "gradeAvg"
        b. the function should accept as a parameter the object above
        c. create a FOR LOOP to total up the average grade for ALL students
        d. "RETURN" the average GPA answer to the item that called the function

    2.  console.log the average grade by calling the gradeAvg method.
----------------------------------------------------------------------------- */
    var gradeAvg = function(obj){
       var count = 0;
       var total = 0; //holds (stores)the total ad it added up.


        for(i = 0,j = obj.students.length; i<j; i++){
            count++;// calculate how many times we go through the loop
            total = total + obj.students[i]['GPA'];
        };
        return total/count
    };

    //gradeAvg(obj1)//CALL to function, calling Or invoking, obj1 is the object that is being used above from var obj1{} everything between the brackets

    console.log('Average Grade:', gradeAvg(obj1));


    //*****step1 create the var = function, 2, create a call 'gradeAvg(obj1)', step3 change 'gradeAvg(obj1)' console out to 'console.log('Average Grade:', gradeAvg(obj1));' add a string to the front "'Average Grade:'," to help id the answer
    //step 4, need the code with the function, create Var in order to keep track of info needed "var count = 0; var total = 0;"
    //step 5 create a for loop "for(i = 0,j = obj.students.length; i<j; i++){};" STUNDENTS.LENGTH go through the entire length of the string
    //step 6 create a count =1 "count++;"
    //Step 7 Need to get grade total of all the GPA together. "total = total + obj.students[i]['GPA'];" The[i] is the index of the students string, first student 0, than 1, than 2. Each TOTAL will add to the next TOTAL of the GPA. "3.5 + 4.0 + 3.9"
    //Step 8, Create a RETURN get the answer. n order to get the answer of the avg., Wew need to add total/count. (divided by).

/* ===============================================================
	The for-in object loop, FOR EACH LOOP non in other laug.
------------------------------------------------------------------	//Filter through the obj allowing us to pull out all the KEYS and Values for the keys, and /or values

//syntax ...below...for(variable)
	for(var key in obj){
		obj[key]
	}
*/
    console.log("---------- Object - For In Loop ----------------");
//keys are in color "name: gender: job", Strings assoc. with keys "JamesBond, male, student"
    var students = {name:"JamesBond",gender:"male",job:"student"};

    for(var key in students){
        console.log('Key Name:',key);
        console.log('Value of the key[',key,']:',students[key]);

    };



//Step1 create Variable. Step 2 Create For Loop " for(var key in students){};" The obj name is students.
    //Step 3 Create Console.log "console.log('Key Name:',key);" Next what is the value of each of the keys? "console.log('Value of the key[',key,']:',students[key]);"
/*
	===============================================
	MORE Object information
	
		- most strictly-typed languages have clear separations in their data types 
			and classical behavior

		- JavaScript is simpler:
			- numbers, strings, and booleans are the only separate data types in JavaScript
			- objects, arrays, regular expressions, and functions are all considered 
				to be objects.
			- in addition, anything that is not an object, acts like an object

			i.e.   "Literal Syntax"
			myStr = ‘James Bond’;
			alert(myStr.length)   //will return a 10


			- previously, we used the most common constructor for creating our 
				variables, which is the literal syntax:

				var myNum = 5;

			- we could also create this variable using its "constructor" equivalent:
	
				var myNum = new Number(5);

			- both have the same result - the literal syntax is preferable	

			- using these constructors, we can also convert from one data type to another.
*/
    console.log('------ Objects - Converting Datatypes ----------');

    var myNum = 1;
    myString = String(myNum);
    console.log('myString:', typeof myString, myString);//myString: string 1. This is equal to string 1 not the number 1
    myBool = Boolean(myString);// in Boolean a 1 is = to true and 0 is equal to false. At this point mystring is is now a number 1
    console.log('myBool:,', typeof  myBool, myBool);// if the string comes back as true, than we know that the string 1 has been converted //myBool:, boolean true


//STEP 1, Create a Var initialize it a number.Step 2 use the string item to convert myNum into a string. Step 3 Create a console.log in order to see if the it has converted to a string.(typeof) what type object is it.
    //Step 4 setup an example of a Boolean "console.log('myBool:,', typeof  myBool, myBool);"

/*
	- because these values act as objects, the data types also have methods and 
		properties, just like an object...  
	- we’ve already looked at one, the .length property, which can be used on 
		both strings and arrays.
*/

// #1 - shows string length
    myStr = 'OMG';
    console.log(myStr.length);//3


// #2 - shows array length

    myArr = [6, 10];
    console.log(myArr.length);//2
	

// #3 - shows and array of objects, inside of an object length

    var obj1 = {
        schoolName:'Full Sail',
        address:'123 University Blvd',
        studentCount:16000,
        students:[
            {name:'Jane Doe', GPA:2.6, classes:['PWA1','ARD']},
            {name:'Albert Einstein', GPA:4.0},
            {name:'James Bond', GPA:3.9}
        ]
    };

        console.log('number of object fields',obj1.
students.length);//number of object fields 3

console.log('------ MORE Object examples - Objects/Functions ----------');

// showing a function call and creating a method

    var fn = function(name, course){
        return{
            sayHi: function(){
            console.log("My name is " + name + " I am in Course " + course);

            }
        }
    };

    fn("JamesBond","PWA1").sayHi();//My name is JamesBond I am in Course PWA1

// Step 1 create a function, Step 2 Create a call "fn("JamesBond","PWA1")" passing this into it.
    //Step 3 Just to output a console.log. You can Create a rtn.
    //Step 4 If you want to call the method (that was created) you can put it on the backend of the call.

/*
	==================================================================
	DOCUMENT OBJECT MODEL
	------------------------------------------------------------------

	document	// global DOM object
	window		// global DOM object
*/
console.log('------------ DOCUMENT OBJECT MODEL -------------------');

//Window DOM object

// console.log(window);
// console.log(window.location);
// console.log(window.history);
// console.log(window.navigator);

 //Document DOM object
 console.log(document);
 console.log(document.body);
 console.log(document.head);



/* //Selectors allows us to select something on a tree
	==================================================================
	syntax below:
	document.getElementById(string);
	TARGET ONLY ONE ITEM
	------------------------------------------------------------------
	- Finds an html element on the page by it's CSS ID.
	- RETURNS a single DOM object.
	- Requires a string. 
	- If there are more than 1 id, it returns the first.

	------------------------------------------------------------------
	BEST PRACTICE:
	
	- Save the html element to a variable for later reference.
	- Code shouldn't repeat itself. Code shouldn't repeat itself.
*/

console.log('------------ getElementById -------------------');

    var playbox = document.getElementById('playbox');
    console.log(playbox);
    playbox.style.backgroundColor = 'Red';

    //in Browser under elements will find playbox body/container/nav
    //Step 1 doc search "document.getElementById('playbox');", Step 2 change to a var in order to initialize it later so you can use it."var playbox = document.getElementById('playbox');"
    //Step 3 console.log out "console.log(playbox);"//div#playbox, the div id is represented by (#)
    //Step change BG color to red, "playbox.style.background.Color = 'Red';" This will also change the HTML color to "RED" Changes it on the Browser pg not the Orginal HTML pg.



    /*
        ==================================================================
     syntax below
        document.getElementsByTagName(string);
        ------------------------------------------------------------------
        - Finds all html elements on the page with a matching html tag, ABLE TO TARGET multiple ITEMS.
        - RETURNS an array (collection) of DOM objects.
    */

console.log('------------ getElementsByTagName -------------------');

    var anchors = document.getElementsByTagName('a');
    console.log(anchors);//[a.navitem, a.navitem, a.navitem, a.navitem, item: function]
    console.log(anchors[1]);//a.navitem

    for(i=0, max=anchors.length; i<max; i++){
        console.log(anchors[i]);
    }






//Step 1 Target anchor tags<a></a> under the <li></li> (use syntax) and change to a a variable. " var anchors = document.getElementsByTagName('a');"
    //Step2 Create console.log "console.log(anchors);"
    //Step3 Target the anchor with index of 1, "console.log(anchors[1]);"
    //Step4 Create a For Loop, for(i=0,max=anchors.length; i<max; i++){console.log(anchors[i]);}

/*
	==================================================================
	syntax below
	document.querySelectorAll('string');
	------------------------------------------------------------------
		- Uses a CSS selector expression to find all html elements that match the expression.
		- Works much like stylesheet declarations (class and ID prefixes)

		- RETURNS an array (collection) of DOM objects. Even if there is 1 object.
			versus the getElementByID (that returns a single DOM element)
*/

console.log('------------ querySelectorAll -------------------');

    var nav = document.querySelectorAll('#nav li:last-child');
    console.log(nav);//[div#nav, item: function]
    //[li, li, li, li, item: function]
    //[li, item: function]
    var cf = document.querySelectorAll('.clearfix');
    console.log(cf);//[ul.clearfix, item: function]

// Step 1 Everything within a ID Tag, Create doc syntax. Target the ID by assigning a Var. "var nav = document.querySelectorAll('#nav');" Step 2 create console.log
// Step 3 Now we want to target all the info in the <li> In the Syntax add LI to the string. "var nav = document.querySelectorAll('#nav li');"
    //Step 4 If we want to filter even more The string can be told filter too the last child, just add it to the string BUT remember it is layer below the li " var nav = document.querySelectorAll('#nav li:last-child');"
    //Step 5 Class Name vs the ID "var cf = document.querySelectorAll('.clearfix');"

/*
	==================================================================
	syntax below
	document.querySelector('string');
	------------------------------------------------------------------
		- Works just like querySelectorAll, but only returns the first match,
			If multiple exist, return the first
		
		- RETURNS a single DOM object.
*/
    console.log('------------ querySelector -------------------');

    var nav = document.querySelector('#nav');
    console.log(nav);//div#nav

    //return the first item


//
    /*
        ==================================================================
        TRAVERSAL
        ------------------------------------------------------------------
            - "Traversing" means finding other html elements from already selected
                element(s)
            - We use XML nodes for traversing

        Traversing works by parent/child/sibling relationships:

            - firstChild
            - lastChild
            - parentNode
            - nextSibling
            - previousSibling
            - childNodes

        Will be used in ALL future assignments.
    */
    console.log('------------ TRAVERSAL -------------------');
    var apple = document.querySelectorAll('#nav li a')[2];
    console.log(apple);//a.navitem
    //console.log(apple.parentNode);//li
    console.log(apple.parentNode.parentNode);//ul.clearfix
    console.log(apple.parentNode.parentNode.parentNode);//div#nav
    //console.log((apple.parentNode.parentNode.parentNode).childNodes);
    //console.log((apple.parentNode.parentNode.parentNode).nextSibling);//#text



//Nav up.

// First target the APPLE <li> Create the selector, than make it a Var. "var apple = document.querySelectorAll('#nav li a')[2];"
    //Step 2 console.log out "console.log(apple);"
    // Next in order to find out what the parent node is. Which is above the link. "console.log(apple.parentNode);" Should be able to look at browser open the <li> and nav down to see child link, which is APPLE
    //Step3, if you want to nav up one more time. You would add parentNode again to the string. "console.log(apple.parentNode.parentNode);"
    //Repeat

/*
	==================================================================
	Manipulating Attributes
	------------------------------------------------------------------
		- HTML elements have attributes, things like "href", "src", "title", etc
		- To access these attributes, there are specific setter/getter methods.

        Syntax:
        - element.setAttribute(attr, 'value')
            - always initializes an attribute to a new value
        - element.getAttribute(attr)
            - always returns a string

        attr = href, src, class
*/

    console.log('-------------Manipulating Attributes setAttribute / getAttribute-----');


//    var navLinks = document.querySelectorAll('#nav li');
//
//    for(var i= 0, max=navLinks.length; i<max; i++){
//        var href = navLinks[i].firstChild.getAttribute('href');
//        console.log('Manipulation HREF:',href);//Manipulation HREF: #1, Manipulation HREF: #2, Manipulation HREF: http://apple.com, Manipulation HREF: http://google.com
//
//        if(href === '#1'){
//            var href2 = navLinks[i].firstChild;
//            console.log(href2);//a.navitem (<a class="navitem" href="#1>Link 1</a>)
//            href2.setAttribute('href', 'http://www.fullsail.com');
//        };
//    };


    // Setting link to = url.
    //Step 1 Create the syntax and add the Var.
    //Step 2 need to filter through the HTML to find the item for the link. Looking for "href" with a (#1) sign in it. Now we need to replace it with the address.
    //Step 3 we need to setup a loop to filter through to find the (#1) "for(var i= 0, max=navLinks.length; i<max; i++){};"
    //Step4 create a code with a var "var href = navLinks[i].firstChild.getAttribute('href');" Next console.log "console.log('Manipulation HREF:',href);"
    //Next need to locate the (#1) is. Set up a conditional "if(href === '#1'){};"
    //Next create code "var href2 = navLinks[i].firstChild;" New var. and console.log "console.log(href2);"
    //Step 5 Create a setAttribute "href2.setAttribute('href', 'http://www.fullsail.com');" Now if you roll over the link in browser you will see fullsail being displayed

/*
	==================================================================
	Manipulating CSS Classes
	------------------------------------------------------------------
		- If you use setAttribute to change the "class" attribute of an element,
			that element is immediately redrawn with the new css styles.
		
		- Just like normal, you can set MULTIPLE classes at once.
		
			element.setAttribute('class', 'thumb active')

		- FYI: Elements can have multiple classes.
*/

console.log('------------ Manipulating CSS Classes -------------------');

//    var navLinks = document.querySelectorAll('#nav li');
//
//    for(var i= 0, max=navLinks.length; i<max; i++){
//        var href = navLinks[i].firstChild.getAttribute('href');
//        console.log('Manipulation HREF:',href);//Manipulation HREF: #1, Manipulation HREF: #2, Manipulation HREF: http://apple.com, Manipulation HREF: http://google.com
//
//        if(href === '#1'){
//            var href2 = navLinks[i].firstChild;
//            console.log(href2);//a.navitem (<a class="navitem" href="#1>Link 1</a>)
//            href2.setAttribute('href', 'http://www.fullsail.com');
//        };
//        var aClass = navLinks[i].firstChild.getAttribute('class');
//        console.log('Manipulation CLASS:', aClass);//Manipulation CLASS: navitem
//
//        navLinks[i].firstChild.setAttribute('class','navitems active');



//Changing the class to be active
    //Step1 a var. "var aClass = navLinks[i].firstchild.getAttribute('class');
    //Step2 console.log "console.log('Manipulation CLASS:', aClass);"
    //Next set the naveitem to active. "navLinks[i].firstChild.setAttribute('class','navitems active');" Go to Browser and you can see the links have changed to wht background

  /*
         ==================================================================
         Manipulating HTML
         ------------------------------------------------------------------
         HTML elements also have a property called "innerHTML" .innerHTML is both a getter and a setter property (using strings)

  */

console.log('-------------Manipulating HTML -------');

//    navLinks[i].firstChild.setAttribute('href','http://google.com');

  //};

    //changing all the links to google.com
    //Step 1 target the href tags and change all to google .com Create a new navLinks "navLinks[i].firstChild.setAttribute('href','http://google.com');" In the browser all links once rolled over should see google .com.

//    var navLinks = document.querySelectorAll('#nav a');
//    console.log(navLinks[1].innerHTML);//link2
//
//    navLinks[1].innerHTML = 'This link rocks!'

    //Another example: change the link2 to read this link Rocks. Setup another selector.Create a var "var navLinks = document.querySelectorAll('#nav a');"
    //Output console.log " console.log(navLinks[1]);"
    //Next pullout the info in that anchor link, add .innerHTML "console.log(navLinks[1].innerHTML);"
    //Now set the link "navLinks[1].innerHTML = 'This link rocks!'"

    // If you want all the links to be setup to read click me 1, with the index number, 1,2,3 Use the following steps.

//    for(var i = 0, max = navLinks.length; i<max; i++){
//        navLinks[i].innerHTML = 'Click Me '+i
//
//    };
    //Step1 setup a loop." querySelectorAll;"
    //Step2 "navLinks[i].innerHTML = 'Click Me'"
    //Step3 add +1 to add to it index number



/*

	==================================================================
	Replacing an HTML container with new HTML
	------------------------------------------------------------------
		- In a later project, you are building a gallery. 
		- You will be targeting the SCR of an image tag.
		- See contentPreview in HTML

Sample Link: http://www.instructables.com/files/deriv/FJI/WGSW/FPIUQQ3K/FJIWGSWFPIUQQ3K.MEDIUM.jpg
*/

    var bigImage = document.querySelector('#contentPreview img');
    bigImage.setAttribute('src','http://www.instructables.com/files/deriv/FJI/WGSW/FPIUQQ3K/FJIWGSWFPIUQQ3K.MEDIUM.jpg');

    //Step 1 setup a var. "var bigImage = document.querySelector('#contentPreview img');"
    // Step 2 use the setAttribute "bigImage.setAttribute();"
    //Step 3 the first parameter you will need to change is the attribute you want to change "src" Next copy the http link."bigImage.setAttribute('src','http://www.instructables.com/files/deriv/FJI/WGSW/FPIUQQ3K/FJIWGSWFPIUQQ3K.MEDIUM.jpg');"

/*
	==================================================================
	DOM Events  (lecture slides)
	------------------------------------------------------------------
		- listener and handler
		- there are 2 key aspects to any event, the event listener and the event handler
			1. the event listener is an property associated with the DOM that waits for the event trigger to 
				occur (i.e click, mouseover), and then fires the event handler
			2. the event handler is the function that will execute when the event is fired

		- using dot syntax, the listener for any element is available as a property 

		- An event listener is all lowercase with the prefix "on"
		
			element.onclick		//click listener
			element.onmousemove			//mousemove listener
	

		- The function is the event handler.  Can be anonymous or named.

			elementObj.onclick = myFn;
			element.onclick = function(){};

		- every event listener automatically passes an "event" object with information about the event  
		- the function's only argument is the EVENT OBJECT (e)
		- the handler must receive it as an argument
		- many developers will use the "e" as the function parameter
		- The function's CONTEXT (this) is the html element.	
*/
console.log('------------ DOM Events Ex 1-------------------');

var nav = document.querySelectorAll('#nav li a');
//    for(var i= 0, max=nav.length; i < max; i++){
//        console.log(nav[i]);
//
//        nav[i].onclick = function(e){
//            console.log(e);
//
//            e.preventDefault();
//            return false;
//        };
//
//    };

/*
// this just console.log's when a click occurs
//Step1 Create a Var to run a querySelectorAll.
//Step2 Create a for loop."for(var i= 0, max=navLinks.length; i<max; i++){};"
//Step3 Create a console.log " console.log(nav[i]);" Show all 4 anchor tags
//Step5 Setup the on click event " nav[i].onclick = function(e){};"
//Step6 console.log "  console.log(e);"
//Remember to add e.preventDefault(); and return false: at the end of all click event files





*/


/*
	==================================================================
	Browser Defaults
	------------------------------------------------------------------
		- for most events, the browser will trigger a default action -  for example, hovering over 
			any element will create a tooltip out of the “title” or “alt” attribute if it exists

		- the one we care the most about is the <a> default action, which tells the window to go to 
			the anchor’s href location

		- the window waits for a return to take place before calling the default
			- so our event function should always return false , and call preventDefault()

		e.stopPropagation();  - calling this method from inside an event handler will prevent the 
								Bubbling Phase from triggering other events

		e.preventDefault();	  - calling this method from inside an event handler will prevent the 
								browser’s default action (such as following an href or the <form> action)
								- Prevent a submit button from submitting a form
   								- Prevent a link from following the URL
					

*/


console.log('------------ DOM Events Ex 2 -------------------');

// this example changes the clicked link to the active class

// for(var i = 0, max = nav.length; i < max; i++){
//
//    nav[i].onclick = function(e){
//
//        for(var ii = 0, max2 =nav.length; ii < max2; ii++){
//            nav[ii].setAttribute('class','navitem');
//        }
//
//            console.log(this);
//            this.setAttribute('class','navitem active');
//
//            e.preventDefault();
//            return false;
//    }


 //};


// Step 1 the first loop allows us to get our onclick in place. Create another for loop.
    //Step 2 Create a second for Loop.
    //Step 3 Make the link active "this.setAttribute('class','navitem active');"



console.log('------------ DOM Events Ex 3 -------------------');

// a more efficient way to do the above

    nav[0].setAttribute('class','navitem active');

    for(var i = 0, max = nav.length; i < max; i++){

        nav[i].onclick = function(e){

//            for(var ii = 0, max2 =nav.length; ii < max2; ii++){
//                nav[ii].setAttribute('class','navitem');
//            }

            document.querySelector('#nav li a.active').setAttribute('class','navitem');

            console.log(this);
            this.setAttribute('class','navitem active');

            e.preventDefault();
            return false;
        }


    };

// A more effective code would be




})(); // end wrapper