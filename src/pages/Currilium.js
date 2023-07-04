import Learningcard from "./Learningcard";

function Currilium() {
    return (
        <div className="curriculum">
          <div id="curriculum-scroll">
            <div className="top">
                <p>OUR CURRICULUM</p>
                <h1>Structured Curriculum Vetted By <span>Industry Experts</span></h1>
            </div>
            {/* <div>
                <div className="struct">
                    <h5>Basics of Java Programming Language</h5>
                    <p>2 Weeks</p>
                </div>
                <div className="struct">
                    <h5>Basics of Java Programming Language</h5>
                    <p>2 Weeks</p>
                </div>
                <div className="struct">
                    <h5>Basics of Java Programming Language</h5>
                    <p>2 Weeks</p>
                </div>

                <div className="struct">
                    <h5>Basics of Java Programming Language</h5>
                    <p>2 Weeks</p>
                </div>

            </div> */}


<div className="c-2">
<div className="c-left">
 <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      <h5>Basics of Java Programming Language</h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <p>Java is the Most Popular programming language in the software world Today. And we are going to learn Java concepts from beginner to advanced level.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <h5>Problem Solving Techniques -1 (Basics)</h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <p>Worried about Recursion & Backtracking? We will learn a step-by-step process to tackle almost any Recursion & Backtracking problem.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <h5>OOPS & Collection Framework</h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <p>OOPS concepts are very important from Interview point of view. We will cover all the concepts with real-world examples to help you understand them better.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
        <h5>Data Structures - 1(Basics)</h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
      <div class="accordion-body">
        <p>Linear data structures such as Arrays, Linked Lists are most often overlooked by students. However, more than 90% of the interviewers ask problems from these very basic data structures. Don't worry, we have got your back here as well.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
        <h5>Problem Solving Techniques - 2(Advanced)</h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
      <div class="accordion-body">
        <p>Hiring candidates with strong problem solving skills is hugely beneficial for a company. So in order to pass the interviews, you need to have your "Problem Solving Toolbox" complete with these topics.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
        <h5>Trees</h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
      <div class="accordion-body">
        <p>Trees are one of the most favorite topics of many interviewers. So we are going to cover Trees in great detail which will also help you improve your Recursion concepts.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
        <h5>Data Structures - 2(Advanced)</h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
      <div class="accordion-body">
        <p>Advanced Data Structures like Hashmaps, Priority Queues and Disjoint sets can help you improve the Time complexity of various problems. We will also solve multiple problems on the Graph Data Structure.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
        <h5>Dynamic Programming</h5>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
      <div class="accordion-body">
        <p>Dynamic Programming (DP) problems can be one of the most intimidating problems for the beginners in coding. But don't worry, we will talk about all the variations of DP problems and solve various problems too to make the learning process easier for you.</p>
      </div>
    </div>
  </div>
</div> 
</div>
<div className="c-right">
  <Learningcard/>
</div>
</div>
</div>
        </div>
    )

}
export default Currilium;