
// Journeyboard expand / collapse

const journeyBoardElement = document.querySelector('.journey-board');
const expandElement = document.querySelector('.expand');

const journeyBoardCollapse = () => {

    expandElement.style.display = "none";
    journeyBoardElement.style.display = "block";

}

const journeyBoardExpand = () => {

    expandElement.style.display = "block";
    journeyBoardElement.style.display = "none";

}

// Technical Project Management

const createTPM_Container = (asset) =>  {

    assetsElement.innerHTML += `

    <div class="asset-container">

               <div class="asset-header">

                   <h3>${asset.asset_title}</h3>

                   <img src="./assets/Group_1735.png" alt="">

               </div>

               <p><span>Description:</span> ${asset.asset_description}</p>

               <iframe src=${asset.asset_content} alt="">

               


           </div>
   
   `


}


// Threadbuild

const hide =() =>{

    setTimeout(() => {

        const ff = document.querySelector(".sub-thread-container");
        const arrow = document.querySelector(".asset-thread-title-img");
        const arrowDown = document.querySelector(".asset-thread-title-img-down");

    
        ff.style.display = "none"
        arrow.style.display = "none"
        arrowDown.style.display = "block"

        
    },1000);
   

} 
const show =() =>{

    setTimeout(() => {

        const ff = document.querySelector(".sub-thread-container");
        const arrow = document.querySelector(".asset-thread-title-img");
        const arrowDown = document.querySelector(".asset-thread-title-img-down");


        ff.style.display = "block"
        arrow.style.display = "block"
        arrowDown.style.display = "none"

        
    },1000);
   

} 



const createThreadBuild_Container = (asset) => {

   
    assetsElement.innerHTML += `

    <div class="asset-container">

               <div class="asset-header">

                   <h3>${asset.asset_title}</h3>

                   <img src="./assets/Group_1735.png" alt="">

               </div>

               <p><span>Description:</span> ${asset.asset_description}</p>

               <div class="asset-thread">

                    <div class="asset-thread-title">

                        <img onclick=hide() class="asset-thread-title-img" src="assets/Vector_1.png" alt="" >
                        <img onclick=show() class="asset-thread-title-img-down" src="assets/Vector_1.png" alt="" >

                        <h2 >Thread A</h2>

                    </div>

                    <div class="sub-thread-container">

                        <div class="sub-thread">

                            <div class="sub-thread-item">

                                <div class="subthread-title">

                                    <h3> Sub thread 1</h3>

                                    <div class="subthread-input">

                                        <input name="subthread-input" id="" placeholder="Enter Text here">
        
                                    </div>
                                </div>

                                
                            </div>
                            <div class="sub-thread-item">

                                <div class="subthread-title">

                                    <h3>Sub Interpretation 1</h3>

                                    <div class="subthread-input">

                                        <input name="subthread-input" id="" placeholder="Enter Text here">
                                        
                                    </div>
        

                                </div>

                                
                            </div>
                        </div>

                        <div class="subtread-icon-container">

                            <div class="subthread-icons">

                                <img src="assets/icon1.png" alt="">
                                <img src="assets/icon2.png" alt="">
                                <img src="assets/icon3.png" alt="">
                                <img src="assets/icon4.png" alt="">

                            </div>

                            <select name="Select Categ" id="" >

                                <option value="Categ">Select Categ</option>
                                
                            </select>
                            <select name="Process" id="" >

                                <option value="Select Process">Select Process</option>

                            </select>
                        </div>

                        <button class="subthread-button">+ Sub-thread</button>

                        <div class="subtread-summary">

                            <div class="subthread-summary-title">

                            <h3> Summary for Thread A</h3>

                                <div class="subthread-summary-input">

                                    <input name="subthread-summary--input" id="" placeholder="Enter Text here">
                                        
                                </div>

                            </div>

                        

                            
                        </div>
                    </div>

                    </div>

                    


                </div>



           </div>
   
   `
  


}


// Structure you pointers

const createSYP_Container = (asset) => {

    assetsElement.innerHTML += `

         <div class="asset-container">

                    <div class="asset-header">

                        <h3>${asset.asset_title}</h3>

                        <img src="./assets/Group_1735.png" alt="">

                    </div>

                    <p><span>Description:</span> ${asset.asset_description}</p>

                  <div class="pointer-container">

                        <h3>Title </h3>

                        <input type="text" class="title-input">

                        <h3>Content</h3>

                        <!-- <div class="pointer-content"> -->

                        <div class="format">

                            <div class="format-top">

                                <li>File</li>
                                <li>Edit</li>
                                <li>View</li>
                                <li>Insert</li>
                                <li>Format</li>
                                <li>Tools</li>
                                <li>Table</li>
                                <li>Help</li>
                            </div>
                            <div class="format-bottom">

                                <img src="assets/left.png" alt="">
                                <img src="assets/right.png" alt="">
                                <img src="assets/expand.png" alt="">

                                <p>Paragraph</p>

                                <div class="format-more">
                                    <img src="assets/Ellipse_196.png" alt="">
                                    <img src="assets/Ellipse_196.png" alt="">
                                    <img src="assets/Ellipse_196.png" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="format-input">
                            <input type="text" class="format-input-input">
                        </div>
                        <!-- </div> -->

                    </div>

                    


                </div>
        
        `

    


}

// 4SA Method  

const hideIntro =() =>{

    setTimeout(() => {

        const intro = document.querySelector(".intro-content");
        const arrow = document.querySelector(".intro-title-img");
        const arrowDown = document.querySelector(".intro-title-down");

    
        intro.style.display = "none"
        arrow.style.display = "none"
        arrowDown.style.display = "block"

        
    },1000);
   

} 

const hideThread =() =>{

    setTimeout(() => {

        const intro = document.querySelector(".thread-content");
        const arrow = document.querySelector(".thread-title-img");
        const arrowDown = document.querySelector(".thread-title-img-down");

    
        intro.style.display = "none"
        arrow.style.display = "none"
        arrowDown.style.display = "block"

        
    },1000);
   

} 
const showIntro =() =>{

    setTimeout(() => {

        const intro = document.querySelector(".intro-content");
        const arrow = document.querySelector(".intro-title-img");
        const arrowDown = document.querySelector(".intro-title-down");

    
        intro.style.display = "block"
        arrow.style.display = "block"
        arrowDown.style.display = "none"

        
    },1000);
   

} 

const showThread =() =>{

    setTimeout(() => {

        const intro = document.querySelector(".thread-content");
        const arrow = document.querySelector(".thread-title-img");
        const arrowDown = document.querySelector(".thread-title-img-down");

    
        intro.style.display = "block"
        arrow.style.display = "block"
        arrowDown.style.display = "none"

        
    },1000);
   

} 


const createMethod_Container = (asset) => {


    assetsElement.innerHTML += `

    <div class="asset-container">

               <div class="asset-header">

                   <h3>${asset.asset_title}</h3>

                   <img src="./assets/Group_1735.png" alt="">

               </div>

               <p><span>Description:</span> ${asset.asset_description}</p>

               <div class="method-container">

                    <div class="introduction">

                        <div class="intro-title">

                            <img class="intro-title-img" onclick=hideIntro() src="assets/Vector_1.png" alt="">
                            <img class="intro-title-down" onclick=showIntro() src="assets/Vector_1.png" alt="">
                            <h3>Introduction </h3>
                        </div>

                        <div class="intro-content">

                            <p>The 4SA Method , How to bring a idea into progress ?</p>

                            <h6>See More</h6>


                        </div>
                    </div>

                    <div class="method-thread">

                        <div class="method-thread-title">

                            <img class="thread-title-img" onclick=hideThread() src="assets/Vector_1.png" alt="">
                            <img class="thread-title-img-down" onclick=showThread() src="assets/Vector_1.png" alt="">
                            <h3>Thread A </h3>
                        </div>

                        <div class="thread-content">

                            <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>

                            <h6>See More</h6>


                        </div>



                    </div>

                    <div class="method-example">

                        <div class="exapmle-head"><h3>Example </h3>1</div>

                        <div class="example-content">

                            <p>You have a concept , How will you put into progress?</p>
                        </div>
                    </div>
                </div>
               


           </div>
   
   `


}

const assetsElement = document.querySelector(".assets");

const assetsGenerator = async () => {

    const response = await fetch('tasks.json',{  
        headers: {  
          Accept: "application/json"  
        }  
      });

    const tasks = await response.json();

    const assets = tasks.tasks[0].assets;

    console.log(assets)

    assets.forEach((asset) => {

        console.log(asset.asset_content)

        {asset.asset_title === "Technical Project Management" ? createTPM_Container(asset) : ""  }
        {asset.asset_title === "Threadbuild" ? createThreadBuild_Container(asset) : ""  }
        {asset.asset_title === "Structure you pointers " ? createSYP_Container(asset) : ""  }
        {asset.asset_title === "4SA Method" ? createMethod_Container(asset) : ""  }
    

       
    })

    


}






assetsGenerator();



