<script src="/sites/MPSPO/SPO/scripts/libs/JS/jquery-1.12.4.min.js" crossorigin="anonymous" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="></script>
<script type="text/javascript" src="/sites/MPSPO/SPO/scripts/libs/JS/moment.js"></script>
<script src="/sites/MPSPO/SPO/scripts/libs/JS/jquery.min.js" type="text/javascript"></script>
<script src="/sites/MPSPO/SPO/scripts/libs/JS/sputility.min.js"></script>
<script type="text/javascript">
var preReviewCount=0;
var reviewCount=0;
var assessementCount=0;
var assessCountNew=0;
var implementCount=0;
var executeCount=0;
var preSItemCount=0;
var regulatorCount=0;
var StagesPrevValue="";
var StatesPrevValue="";

$(document).ready(function(){ 

$("input[title='PI Number']").attr("readonly","true").css('background-color','#F6F6F6');

var chngStgVal = $("select[title='PI Stages'] option:selected").text();
var chngStVal = $("select[title='PI States'] option:selected").text();

StagesPrevValue = $("select[title='PI Stages'] option:selected").text();
StatesPrevValue = $("select[title='PI States'] option:selected").text();

	if(chngStgVal == 'Pre-Review' && chngStVal == 'Rejected' || chngStgVal == 'Review' && chngStVal == 'Rejected' || chngStgVal == 'Assessment' && chngStVal == 'Canceled' || chngStgVal == 'Implement' && chngStVal == 'Canceled' || chngStgVal == 'Implement' && chngStVal == 'Completed')
	{
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
	}
	if(chngStgVal == 'Pre-Review' && chngStVal == 'Submitted')
    {
        preReviewCount++;       
				 
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",false);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",false);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",false);				
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
    }
    else{ 
        } 
                
    $("select[title='PI Stages']").change(function () {
    chngStgVal = $("select[title='PI Stages'] option:selected").text(); 
                
    if(preReviewCount !=0 && chngStgVal == 'Review')
    {      
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",false);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
                
    }
    else{            
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",false);
                             
        }   
   });        
                
    $("select[title='PI States']").change(function () {
    chngStVal = $("select[title='PI States'] option:selected").text();
   });

  /* stage and state step 2 */

    if(chngStgVal == 'Review' && chngStVal == 'Submitted')
    {
        reviewCount++;              
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",false);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",false);
                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",false);				
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
                
    }
    else{} 
                
    $("select[title='PI Stages']").change(function () {
    chngStgVal = $("select[title='PI Stages'] option:selected").text(); 
                
    if(reviewCount !=0 &&(chngStgVal == 'Assessment' && chngStVal == 'Accepted' || chngStgVal == 'Assessment' && chngStVal == 'Submitted' || chngStgVal == 'Assessment' && chngStVal == 'Active' || chngStgVal == 'Assessment' && chngStVal == 'Rejected'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",false);				
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
    }
    else if(reviewCount !=0 &&(chngStgVal == 'Review' && chngStVal == 'Rejected' || chngStgVal == 'Review' && chngStVal == 'Accepted' || chngStgVal == 'Assessment' && chngStVal == 'Rejected' || chngStgVal == 'Review' && chngStVal == 'Submitted'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
               
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",false);				
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
    }
	else if(reviewCount !=0 &&(chngStgVal == 'Assessment' && chngStVal == 'Accepted'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
               
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",false);				
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
    }
    else{}
   
	});        
                
    $("select[title='PI States']").change(function () {
    chngStVal = $("select[title='PI States'] option:selected").text();
	
    if(reviewCount !=0 &&(chngStgVal == 'Assessment' && chngStVal == 'Submitted' || chngStgVal == 'Assessment' && chngStVal == 'Active' || chngStgVal == 'Assessment' && chngStVal == 'Rejected'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",false);				
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
    }
    else if(reviewCount !=0 &&(chngStgVal == 'Review' && chngStVal == 'Rejected' || chngStgVal == 'Review' && chngStVal == 'Accepted' || chngStgVal == 'Assessment' && chngStVal == 'Rejected' || chngStgVal == 'Review' && chngStVal == 'Submitted'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",false);				
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
    }
	else if(reviewCount !=0 &&(chngStgVal == 'Assessment' && chngStVal == 'Accepted'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
               
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",false);				
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
    }	
    else{}

   });
   
   /* stage and state step 3,Start */
   
    if(chngStgVal == 'Assessment' && chngStVal == 'Accepted')
    {
        assessementCount++;                                            
                                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",false);
                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
   }
   else{} 
                
    $("select[title='PI Stages']").change(function () {
    chngStgVal = $("select[title='PI Stages'] option:selected").text();
                                                          
    if(assessementCount!=0 &&(chngStgVal == 'Execute' && chngStVal == 'Active' || chngStgVal == 'Execute' && chngStVal == 'Accepted' || chngStgVal == 'Execute' && chngStVal == 'Accepted' || chngStgVal == 'Execute' && chngStVal == 'Pending' || chngStgVal == 'Execute' && chngStVal == 'Canceled' || chngStgVal == 'Execute' && chngStVal == 'Future Consideration'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
    }
	else{}
                                                          
    if(assessementCount!=0 && (chngStgVal == 'Assessment' && chngStVal == 'Accepted' || chngStgVal == 'Assessment' && chngStVal == 'Active'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);                
    }
    else{}
                              
    });        
                
	$("select[title='PI States']").change(function () {
	chngStVal = $("select[title='PI States'] option:selected").text();
                                                          
    if(assessementCount!=0 &&(chngStgVal == 'Execute' && chngStVal == 'Accepted' || chngStgVal == 'Execute' && chngStVal == 'Pending' || chngStgVal == 'Execute' && chngStVal == 'Canceled' || chngStgVal == 'Execute' && chngStVal == 'Future Consideration'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
    }
    else{}
                                                          
    if(assessementCount!=0 && (chngStgVal == 'Assessment' && chngStVal == 'Accepted' || chngStgVal == 'Assessment' && chngStVal == 'Active'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);                
    }
    else{}
	
    if(assessementCount!=0 && (chngStgVal == 'Execute' && chngStVal == 'Accepted' || chngStgVal == 'Execute' && chngStVal == 'Active'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);                
                
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
    } 
    else{}                                               
    });
                                           
    /* stage and state step 3,End */              
                             
    /* stage and state step 4,Start */
   
    if(chngStgVal == 'Assessment' && chngStVal == 'Future Consideration' || chngStgVal == 'Assessment' && chngStVal == 'Pending')
    {
        assessCountNew++;                
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
    }
    else{}
                
    $("select[title='PI Stages']").change(function () {
	chngStgVal = $("select[title='PI Stages'] option:selected").text();
                                                          
    if(assessCountNew!=0 &&(chngStgVal == 'Execute' && chngStVal == 'Active' || chngStgVal == 'Execute' && chngStVal == 'Accepted' || chngStgVal == 'Execute' && chngStVal == 'Pending' || chngStgVal == 'Execute' && chngStVal == 'Canceled' || chngStgVal == 'Execute' && chngStVal == 'Future Consideration'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false); 
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);					
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
    }
    if(assessCountNew!=0 && (chngStgVal == 'Implement' && chngStVal == 'Future Consideration' || chngStgVal == 'Implement' && chngStVal == 'Pending' || chngStgVal == 'Implement' && chngStVal == 'Canceled'))
    {                                       
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
    }
    else if(assessCountNew!=0 && (chngStgVal == 'Implement' && chngStVal == 'Active' || chngStgVal == 'Execute' && chngStVal == 'Active'))
	{
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
         $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
    }
    else if(assessCountNew!=0 && (chngStgVal == 'Assessment' && chngStVal == 'Active' ||chngStgVal == 'Assessment' && chngStVal == 'Pending' || chngStgVal == 'Assessment' && chngStVal == 'Canceled' || chngStgVal == 'Assessment' && chngStVal == 'Future Consideration' ))
    {
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
               
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
    }
    else{}                                                          
    });        
                
    $("select[title='PI States']").change(function () {
    chngStVal = $("select[title='PI States'] option:selected").text();
                                                          
    if(assessCountNew!=0 && (chngStgVal == 'Assessment' && chngStVal == 'Active' || chngStgVal == 'Assessment' && chngStVal == 'Canceled' || chngStgVal == 'Assessment' && chngStVal == 'Pending' || chngStgVal == 'Assessment' && chngStVal == 'Future Consideration'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
               
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
    }
    else{}
    if(assessCountNew!=0 && (chngStgVal == 'Implement' && chngStVal == 'Future Consideration' || chngStgVal == 'Implement' && chngStVal == 'Pending' || chngStgVal == 'Implement' && chngStVal == 'Canceled'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
              
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);                
    }
    else if(assessCountNew!=0 && (chngStgVal == 'Implement' && chngStVal == 'Active' || chngStgVal == 'Execute' && chngStVal == 'Active' || chngStgVal == 'Assessment' && chngStVal == 'Active')){
                                                          
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
               
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
    }                
    else{}                                                          
    });
                                           
    /* stage and state step 4,End */ 
                             
    /* stage and state step 5,Start */

    if(chngStgVal == 'Execute' && chngStVal == 'Active'){ 
                
        executeCount++;
        if(executeCount!=0)
        {
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
			$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
			$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
        }
    } 
	if(chngStgVal == 'Assessment' && chngStVal == 'Waiting for Regulatory Approval'){ 
          
        executeCount++;
        if(executeCount!=0)
        {
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",false);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
               
			$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
			$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
            $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
        }
    } 
                                           
    $("select[title='PI Stages']").change(function () {
    chngStgVal = $("select[title='PI Stages'] option:selected").text();
	
    if(executeCount!=0 && (chngStgVal == 'Assessment' && chngStVal == 'Canceled' || chngStgVal == 'Assessment' && chngStVal == 'Pending' || chngStgVal == 'Assessment' && chngStVal == 'Waiting for Regulatory Approval'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
               
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
    }                
    else{}
    if(executeCount!=0 &&(chngStgVal == 'Execute' && chngStVal == 'Active' || chngStgVal == 'Execute' && chngStVal == 'Future Consideration' || chngStgVal == 'Execute' && chngStVal == 'Pending' || chngStgVal == 'Execute' && chngStVal == 'Canceled' || chngStgVal == 'Execute' && chngStVal == 'Waiting for Regulatory Approval'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
                
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
    }
    if(executeCount!=0 && (chngStgVal == 'Implement' && chngStVal == 'Future Consideration' || chngStgVal == 'Implement' && chngStVal == 'Pending' || chngStgVal == 'Implement' && chngStVal == 'Canceled'))
    {
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);                
                }
                else if(executeCount!=0 &&(chngStgVal == 'Execute' && chngStVal == 'Active')){
                                                          
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);                
                
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                }
                else if(executeCount!=0 &&(chngStgVal == 'Assessment' && chngStVal == 'Active'))
                {
                                                          
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                                                          
                }
                else if(executeCount!=0 &&(chngStgVal == 'Implement' && chngStVal == 'Active'))
                {
                                                          //alert("5th step, Implement with Active");
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);                
                
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);                                                          
                }
                else{                  
                }                                                                 
   
                });        
                
            $("select[title='PI States']").change(function () {
            chngStVal = $("select[title='PI States'] option:selected").text();
                                                          
                if(executeCount!=0 && (chngStgVal == 'Assessment' && chngStVal == 'Canceled' || chngStgVal == 'Assessment' && chngStVal == 'Pending' || chngStgVal == 'Assessment' && chngStVal == 'Waiting for Regulatory Approval'))
                {
                
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                
                }                
                else{                  
                }
                if(executeCount!=0 &&(chngStgVal == 'Implement' && chngStVal == 'Future Consideration' || chngStgVal == 'Implement' && chngStVal == 'Pending' || chngStgVal == 'Implement' && chngStVal == 'Canceled'))
                {                      
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                }
                else if(executeCount!=0 && (chngStgVal == 'Implement' && chngStVal == 'Active' || chngStgVal == 'Execute' && chngStVal == 'Active' || chngStgVal == 'Assessment' && chngStVal == 'Active')){
                                                          
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                }                
                else{                  
                }
				if(executeCount!=0 &&(chngStgVal == 'Execute' && chngStVal == 'Active' || chngStgVal == 'Execute' && chngStVal == 'Pending' || chngStgVal == 'Execute' && chngStVal == 'Canceled' || chngStgVal == 'Execute' && chngStVal == 'Waiting for Regulatory Approval'))
                {
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                
                }
                if(executeCount!=0 && (chngStgVal == 'Implement' && chngStVal == 'Future Consideration' || chngStgVal == 'Implement' && chngStVal == 'Pending' || chngStgVal == 'Implement' && chngStVal == 'Canceled'))
                {                                                          
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                }
                else if(executeCount!=0 &&(chngStgVal == 'Execute' && chngStVal == 'Active')){
                                                          
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                }
                else if(executeCount!=0 &&(chngStgVal == 'Assessment' && chngStVal == 'Active'))
                {
                                                          
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                                                          
                }
                else if(executeCount!=0 &&(chngStgVal == 'Implement' && chngStVal == 'Active'))
                {
                                                          
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                                                          
                }
                else{                  
                }                                                       
                });
                                           
                /* stage and state step 5,End */                     
                             
                /* stage and state step 6,Start */

                if(chngStgVal == 'Implement' && chngStVal == 'Active'){ 
                
                implementCount++;
                if(implementCount!=0)
                {
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                }
            } 
                                           
                
            $("select[title='PI Stages']").change(function () {
            chngStgVal = $("select[title='PI Stages'] option:selected").text();
                if(implementCount!=0 && (chngStgVal == 'Assessment' && chngStVal == 'Canceled' || chngStgVal == 'Assessment' && chngStVal == 'Completed' || chngStgVal == 'Assessment' && chngStVal == 'Active'))
                {
                
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);                
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                
                }
                else if(implementCount!=0 && (chngStgVal == 'Implement' && chngStVal == 'Canceled' || chngStgVal == 'Implement' && chngStVal == 'Completed' || chngStgVal == 'Implement' && chngStVal == 'Future Consideration' || chngStgVal == 'Implement' && chngStVal == 'Pending' || chngStgVal == 'Implement' && chngStVal == 'Active'))
                {
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
                
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                }                
                else{                  
                }
				});        
                
            $("select[title='PI States']").change(function () {
            chngStVal = $("select[title='PI States'] option:selected").text();
                                                          
                if(implementCount!=0 && (chngStgVal == 'Assessment' && chngStVal == 'Canceled' || chngStgVal == 'Assessment' && chngStVal == 'Completed' || chngStgVal == 'Assessment' && chngStVal == 'Active'))
                {
                
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
                
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                
                }
                else if(implementCount!=0 && (chngStgVal == 'Implement' && chngStVal == 'Canceled' || chngStgVal == 'Implement' && chngStVal == 'Completed' || chngStgVal == 'Implement' && chngStVal == 'Future Consideration' || chngStgVal == 'Implement' && chngStVal == 'Pending' || chngStgVal == 'Implement' && chngStVal == 'Active'))
                {
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
                
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                }                
                else{                  
                }                                                       
                });    
				
				/* stage and state step 6,End */			   


			   /* stage and state step 7,Start */  
                
				if(chngStgVal == 'Assessment' && chngStVal == 'Waiting for Regulatory Approval')
                {
                regulatorCount++;                

                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",false);
                
                
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                
                }
                else
                { 
                }
                
            $("select[title='PI Stages']").change(function () {
            chngStgVal = $("select[title='PI Stages'] option:selected").text();
                                                          
                if(regulatorCount!=0 &&(chngStgVal == 'Execute' && chngStVal == 'Active' || chngStgVal == 'Execute' && chngStVal == 'Pending' || chngStgVal == 'Execute' && chngStVal == 'Canceled' || chngStgVal == 'Execute' && chngStVal == 'Future Consideration' || chngStgVal == 'Execute' && chngStVal == 'Waiting for Regulatory Approval'))
                {
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false); 
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);					
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                
                }
                if(regulatorCount!=0 && (chngStgVal == 'Implement' && chngStVal == 'Future Consideration' || chngStgVal == 'Implement' && chngStVal == 'Pending' || chngStgVal == 'Implement' && chngStVal == 'Canceled' || chngStgVal == 'Implement' && chngStVal == 'Active' || chngStgVal == 'Implement' && chngStVal == 'Waiting for Regulatory Approval'))
                {                      
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);                
                }
                else if(regulatorCount!=0 && (chngStgVal == 'Assessment' && chngStVal == 'Active' ||chngStgVal == 'Assessment' && chngStVal == 'Pending' || chngStgVal == 'Assessment' && chngStVal == 'Canceled' || chngStgVal == 'Assessment' && chngStVal == 'Future Consideration' || chngStgVal == 'Assessment' && chngStVal == 'Future Consideration' || chngStgVal == 'Assessment' && chngStVal == 'Waiting for Regulatory Approval'))
                {
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
                
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                }
                else{                  
                }                                                          
                });        
                
            $("select[title='PI States']").change(function () {
            chngStVal = $("select[title='PI States'] option:selected").text();
                                                          
                if(regulatorCount!=0 && (chngStgVal == 'Assessment' && chngStVal == 'Active' || chngStgVal == 'Assessment' && chngStVal == 'Canceled' || chngStgVal == 'Assessment' && chngStVal == 'Pending' || chngStgVal == 'Assessment' && chngStVal == 'Future Consideration' || chngStgVal == 'Assessment' && chngStVal == 'Waiting for Regulatory Approval'))
                {
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                }
                
                else{                  
                }
                if(regulatorCount!=0 && (chngStgVal == 'Implement' && chngStVal == 'Future Consideration' || chngStgVal == 'Implement' && chngStVal == 'Pending' || chngStgVal == 'Implement' && chngStVal == 'Canceled' || chngStgVal == 'Implement' && chngStVal == 'Waiting for Regulatory Approval'))
                {
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);                
                }
                else if(regulatorCount!=0 && (chngStgVal == 'Implement' && chngStVal == 'Active' || chngStgVal == 'Execute' && chngStVal == 'Active')){
                                                          
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                }     
				else if(regulatorCount!=0 && (chngStgVal == 'Execute' && chngStVal == 'Canceled')){
                                                          
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",false);
                
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
				$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",false);
                $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
                }  				
                else{                  
                }                                                          
                });
                                           
                /* stage and state step 7,End */ 
                          
});

function isStringNullOrEmpty(val) {
      switch (val) {
        case "":
        case 0:
        case "0":
        case null:
        case false:
        case undefined:
        case typeof this === 'undefined':
          return true;
        default: return false;
      }
    }
	
	function presavePopup()
	{
	var piTitle=document.getElementById("ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff11_ctl00_ctl00_TextField").value;	
	var platformCoreTeam=document.getElementById("ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff21_ctl00_DropDownChoice").value;
	var piSubDate=document.getElementById("ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff111_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value;
	var propActivities = $('#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff101_ctl00_ctl00_TextField_inplacerte').html(); 	
	var proposedActivities=jQuery('<div>' + propActivities + '</div>').text();

	if((((typeof(piTitle) != 'undefined') && piTitle.length >0) || (piTitle != null && piTitle.length >0) || (piTitle != "" && piTitle.length >0)) && ((typeof(platformCoreTeam) != 'undefined' && platformCoreTeam.length>0)|| (platformCoreTeam != null && platformCoreTeam.length>0) || (platformCoreTeam != "" && platformCoreTeam.length>0)) && ((typeof(proposedActivities) != 'undefined' && proposedActivities.length>1) || (proposedActivities != null && proposedActivities.length>1) || (proposedActivities != "" && proposedActivities.length>1)) && ((typeof(piSubDate) != 'undefined' && piSubDate.length>0) || (piSubDate != null && piSubDate.length>0) || (piSubDate != "" && piSubDate.length>0)))
	{
	var value = SP.UI.ModalDialog.showWaitScreenWithNoClose('Please wait....', 'PI is getting updated', 100, 300);
    setTimeout(function() { value.close(0);window.location.reload();},15000);
	}
	else
	{
	return true;
	}
	}
	
function getTimeZoneAndServerDateTime() {

    var context = SP.ClientContext.get_current();
    var web = context.get_web();
    var timeZone = web.get_regionalSettings().get_timeZone();
    context.load(timeZone);
    context.executeQueryAsync(
    function onSucceeded() {
        var info = timeZone.get_information();
        var offset = (info.get_bias() + info.get_daylightBias()) / 60.0;
        var serverDateTimeNow = new Date(new Date().getTime() - offset * 3600 * 1000).toISOString();
		alert("serverDateTimeNow :"+serverDateTimeNow);
    },
     Failure
    );

}

function Failure() {
    alert("error");
}

function UpdateAuditTraillist()
{
	/*Update Audit trail list,Start*/
	var piTitle=document.getElementById("ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff11_ctl00_ctl00_TextField").value;
	var piNumber=document.getElementById("ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff131_ctl00_ctl00_TextField").value;
	var piType = $("select[title='PI Type']").find("option:selected").val();	
	var platformCoreTeam=document.getElementById("ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff21_ctl00_DropDownChoice").value;
	var piSubDate=document.getElementById("ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff111_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value;
 
	var compDate=document.getElementById("ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff341_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value;	
	var piStages = $("select[title='PI Stages']").find("option:selected").val();
	var piStates = $("select[title='PI States']").find("option:selected").val();
	
	var techOptionTeamDecDate=document.getElementById("ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff191_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value;	
	var orgExpComDate=document.getElementById("ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff301_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value;		
	var regSubDate=document.getElementById("ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff321_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value;
	var regApprDate=document.getElementById("ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff311_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value;	

	var riskImpact=document.getElementById("ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff421_ctl00_DropDownChoice").value;
	var riskProbability=document.getElementById("ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff431_ctl00_DropDownChoice").value;
	var propActivities = $('#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff101_ctl00_ctl00_TextField_inplacerte').html(); 
	var proposedActivities=jQuery('<div>' + propActivities + '</div>').text();

if((((typeof(piTitle) != 'undefined') && piTitle.length >0) || (piTitle != null && piTitle.length >0) || (piTitle != "" && piTitle.length >0)) && ((typeof(platformCoreTeam) != 'undefined' && platformCoreTeam.length>0)|| (platformCoreTeam != null && platformCoreTeam.length>0) || (platformCoreTeam != "" && platformCoreTeam.length>0)) && ((typeof(proposedActivities) != 'undefined' && proposedActivities.length>0) || (proposedActivities != null && proposedActivities.length>0) || (proposedActivities != "" && proposedActivities.length>0)) && ((typeof(piSubDate) != 'undefined' && piSubDate.length>0) || (piSubDate != null && piSubDate.length>0) || (piSubDate != "" && piSubDate.length>0)))
{	
	var siteUrl = 'https://spsites.connect.inbaxter.com/sites/MPSPO/SPO';

    var clientContext = new SP.ClientContext(siteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('AuditTrail_PI');
	        
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);        

    	oListItem.set_item('Title', piTitle);
		oListItem.set_item('PINumber', piNumber);
		oListItem.set_item('PIType', piType);
		oListItem.set_item('PlatformCoreTeam', platformCoreTeam);
		
		if((((typeof(piSubDate) != 'undefined') && piSubDate.length >0) || (piSubDate != null && piSubDate.length >0) || (piSubDate != "" && piSubDate.length >0)))
		{
		oListItem.set_item('PISubmissionDate',piSubDate); 
		}
		else{}
     	if((((typeof(compDate) != 'undefined') && compDate.length >0) || (compDate != null && compDate.length >0) || (compDate != "" && compDate.length >0)))
		{		
		oListItem.set_item('CompletedDate', compDate);
		}
		else{}	
		oListItem.set_item('PIStages', piStages);
		oListItem.set_item('PIStates', piStates);
		if((((typeof(techOptionTeamDecDate) != 'undefined') && techOptionTeamDecDate.length >0) || (techOptionTeamDecDate != null && techOptionTeamDecDate.length >0) || (techOptionTeamDecDate != "" && techOptionTeamDecDate.length >0)))
		{
		oListItem.set_item('TechnicalOptionsTeamDecisionDate', techOptionTeamDecDate);
		}
		else{}
		if((((typeof(orgExpComDate) != 'undefined') && orgExpComDate.length >0) || (orgExpComDate != null && orgExpComDate.length >0) || (orgExpComDate != "" && orgExpComDate.length >0)))
		{
		oListItem.set_item('OriginalExpectedCompletionDate', orgExpComDate);
		}
		else{}
		if((((typeof(regSubDate) != 'undefined') && regSubDate.length >0) || (regSubDate != null && regSubDate.length >0) || (regSubDate != "" && regSubDate.length >0)))
		{
		oListItem.set_item('RegulatorySubmissionDate', regSubDate);
		}
		else{}
		if((((typeof(regApprDate) != 'undefined') && regApprDate.length >0) || (regApprDate != null && regApprDate.length >0) || (regApprDate != "" && regApprDate.length >0)))
		{
		oListItem.set_item('RegulatoryApprovalDate', regApprDate);
		}
		else{}
		oListItem.set_item('RiskImpact', riskImpact);
		oListItem.set_item('RiskProbablity', riskProbability);
        
    oListItem.update();
    clientContext.load(oListItem);
        
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed)); 
	}
	function onQuerySucceeded() {
	}

	function onQueryFailed(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
	}
	
	/*Update Audit trail list,End*/
	
}

function PreSaveItem()
{ 
var chngStgVal = $("select[title='PI Stages'] option:selected").text();
var chngStVal = $("select[title='PI States'] option:selected").text();

if(preReviewCount !=0)
{
/*Step1-Pre-Review & Submitted, Start*/
if(preReviewCount !=0 && (chngStgVal == 'Pre-Review' && chngStVal == 'Submitted' || chngStgVal == 'Pre-Review' && chngStVal == 'Rejected' || chngStgVal == 'Review' && chngStVal == 'Submitted'))
{
	if(StagesPrevValue!=chngStgVal || StatesPrevValue!=chngStVal)
	{
	UpdateAuditTraillist();
	}
	presavePopup();
	return true;
}
else
{
alert("Please check PI Stages and PI States combination");
return false;
}
/*Step1-Pre-Review & Submitted, End*/
}
else if(reviewCount !=0)
{
/*Step2-Review & Submitted, Start*/
if(reviewCount !=0 && (chngStgVal == 'Review' && chngStVal == 'Submitted' || chngStgVal == 'Review' && chngStVal == 'Rejected' || chngStgVal == 'Assessment' && chngStVal == 'Accepted'))
{
	if(StagesPrevValue!=chngStgVal || StatesPrevValue!=chngStVal)
	{
	UpdateAuditTraillist();
	}
	presavePopup();
	return true;
}
else
{
alert("Please check PI Stages and PI States combination");
return false;
}
/*Step2-Review & Submitted, End*/
}
else if(assessementCount !=0)
{
/*Step3-Assessment & Accepted, Start*/
if(assessementCount !=0 && (chngStgVal == 'Assessment' && chngStVal == 'Accepted' || chngStgVal == 'Assessment' && chngStVal == 'Future Consideration' || chngStgVal == 'Assessment' && chngStVal == 'Pending' || chngStgVal == 'Assessment' && chngStVal == 'Canceled' || chngStgVal == 'Execute' && chngStVal == 'Active'))
{
	if(StagesPrevValue!=chngStgVal || StatesPrevValue!=chngStVal)
	{
	UpdateAuditTraillist();
	}
	presavePopup();
	return true;
}
else
{
alert("Please check PI Stages and PI States combination");
return false;
}
/*Step3-Assessment & Accepted, End*/
}
else if(assessCountNew !=0 )
{
/*Step4-Assessment & Pending or Future Consideration, Start*/
if(assessCountNew !=0 && (chngStgVal == 'Assessment' && chngStVal == 'Future Consideration' || chngStgVal == 'Assessment' && chngStVal == 'Pending' || chngStgVal == 'Assessment' && chngStVal == 'Canceled' || chngStgVal == 'Execute' && chngStVal == 'Active' || chngStgVal == 'Implement' && chngStVal == 'Active'))
{
	if(StagesPrevValue!=chngStgVal || StatesPrevValue!=chngStVal)
	{
	UpdateAuditTraillist();
	}
	presavePopup();
	return true;
}
else
{
alert("Please check PI Stages and PI States combination");
return false;
}
/*Step4-Assessment & Pending or Future Consideration, End*/
}
else if(executeCount !=0)
{

/*Step5-Execute & Active, Start*/
if(executeCount !=0 && (chngStgVal == 'Assessment' && chngStVal == 'Future Consideration' || chngStgVal == 'Assessment' && chngStVal == 'Pending' || chngStgVal == 'Assessment' && chngStVal == 'Waiting for Regulatory Approval' || chngStgVal == 'Execute' && chngStVal == 'Active' || chngStgVal == 'Execute' && chngStVal == 'Canceled' || chngStgVal == 'Implement' && chngStVal == 'Active'))
{
	if(StagesPrevValue!=chngStgVal || StatesPrevValue!=chngStVal)
	{
	UpdateAuditTraillist();
	}
	presavePopup();
	return true;
}
else
{
alert("Please check PI Stages and PI States combination");
return false;
}
/*Step5-Execute & Active, End*/
}
else if(implementCount !=0)
{
/*Step6-Implement & Active, Start*/
if(implementCount !=0 && (chngStgVal == 'Assessment' && chngStVal == 'Future Consideration' || chngStgVal == 'Assessment' && chngStVal == 'Pending' || chngStgVal == 'Implement' && chngStVal == 'Active' || chngStgVal == 'Implement' && chngStVal == 'Canceled' || chngStgVal == 'Implement' && chngStVal == 'Completed'))
{
	if(StagesPrevValue!=chngStgVal || StatesPrevValue!=chngStVal)
	{
	UpdateAuditTraillist();
	}
	presavePopup();
	return true;
}
else
{
alert("Please check PI Stages and PI States combination");
return false;
}
/*Step6-Implement & Active, End*/
/*Step7-Assessment & Regulator Approval, Start*/
if(regulatorCount !=0 && (chngStgVal == 'Assessment' && chngStVal == 'Future Consideration' || chngStgVal == 'Assessment' && chngStVal == 'Pending' || chngStgVal == 'Assessment' && chngStVal == 'Canceled' || chngStgVal == 'Implement' && chngStVal == 'Active' || chngStgVal == 'Execute' && chngStVal == 'Active' || chngStgVal == 'Execute' && chngStVal == 'Canceled'))
{
	if(StagesPrevValue!=chngStgVal || StatesPrevValue!=chngStVal)
	{
	UpdateAuditTraillist();
	}
	presavePopup();
	return true;
	
}
else
{
alert("Please check PI Stages and PI States combination");
return false;
}
/*Step7-Assessment & Regulator Approval, End*/

}
else
{
if(chngStgVal == 'Pre-Review' && chngStVal == 'Rejected' || chngStgVal == 'Review' && chngStVal == 'Rejected' || chngStgVal == 'Assessment' && chngStVal == 'Canceled' || chngStgVal == 'Implement' && chngStVal == 'Canceled' || chngStgVal == 'Implement' && chngStVal == 'Completed')
{
    if(chngStgVal == 'Pre-Review' && chngStVal == 'Rejected')
	{
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",false);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
 
		if(StagesPrevValue!=chngStgVal || StatesPrevValue!=chngStVal)
		{
		UpdateAuditTraillist();
		}	
		presavePopup();				
	    return true;
	}
	else if(chngStgVal == 'Review' && chngStVal == 'Rejected')	
	{		
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",false);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",false);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
 
		if(StagesPrevValue!=chngStgVal || StatesPrevValue!=chngStVal)
		{
		UpdateAuditTraillist();
		}	
		presavePopup();				
	    return true;
	}
	else if(chngStgVal == 'Assessment' && chngStVal == 'Canceled')	
	{		
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",false);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",true);
 
		if(StagesPrevValue!=chngStgVal || StatesPrevValue!=chngStVal)
		{
		UpdateAuditTraillist();
		}	
		presavePopup();				
	    return true;
	}
	else if(chngStgVal == 'Implement' && chngStVal == 'Canceled')	
	{		
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
 
		if(StagesPrevValue!=chngStgVal || StatesPrevValue!=chngStVal)
		{
		UpdateAuditTraillist();
		}	
		presavePopup();				
	    return true;
	}
	else if(chngStgVal == 'Implement' && chngStVal == 'Completed')	
	{		
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Accepted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Active']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Canceled']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Completed']").prop("disabled",false);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Future Consideration']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Pending']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Rejected']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Submitted']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff151_ctl00_DropDownChoice option[value='Waiting for Regulatory Approval']").prop("disabled",true);
                
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Assessment']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Review']").prop("disabled",true);
		$("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Pre-Review']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Execute']").prop("disabled",true);
        $("#ctl00_ctl39_g_b36d720a_4bb2_498f_b9cd_699d3e3b29f7_ff161_ctl00_DropDownChoice option[value='Implement']").prop("disabled",false);
 
		if(StagesPrevValue!=chngStgVal || StatesPrevValue!=chngStVal)
		{
		UpdateAuditTraillist();
		}	
		presavePopup();				
	    return true;
	}
	else{}
}
else if(chngStgVal == 'Pre-Review' && chngStVal == 'Submitted' || chngStgVal == 'Pre-Review' && chngStVal == 'Rejected' || chngStgVal == 'Review' && chngStVal == 'Submitted' || chngStgVal == 'Review' && chngStVal == 'Rejected' || chngStgVal == 'Assessment' && chngStVal == 'Future Consideration' || chngStgVal == 'Assessment' && chngStVal == 'Pending' || chngStgVal == 'Assessment' && chngStVal == 'Accepted' || chngStgVal == 'Assessment' && chngStVal == 'Canceled' || chngStgVal == 'Assessment' && chngStVal == 'Waiting for Regulatory Approval' || chngStgVal == 'Execute' && chngStVal == 'Active' || chngStgVal == 'Execute' && chngStVal == 'Canceled' || chngStgVal == 'Implement' && chngStVal == 'Active' || chngStgVal == 'Implement' && chngStVal == 'Canceled' || chngStgVal == 'Implement' && chngStVal == 'Completed')
{
	presavePopup();
	return true;
}
else{
alert("Please check PI Stages and PI States combination");
return false;
}

}


}

</script>
