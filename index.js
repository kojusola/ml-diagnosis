//const { default: Axios } = require("axios");

var symptoms = document.querySelectorAll('.symptom');
var predict = document.querySelector('#predict');
var result = document.querySelector('.results');
var refresh = document.querySelector('#refresh');
var myform = document.querySelector('.form');
var itching = document.querySelector('#itching');
var skinrash = document.querySelector('#skinrash');

//Event listeners
myform.addEventListener('submit', predicts);


for(var i =0; i < symptoms.length; i++){
    var symp = symptoms[i]
    symp.addEventListener('click',changevalue)
    symp.addEventListener('dblclick', removevalue)
}
console.log($("#itching").val())
//function
function changevalue(e){
    e.preventDefault()
    var sym = e.target
    sym.value = 1
    sym.classList.add("clicked")
}
function removevalue(e){
    e.preventDefault()
    var sym = e.target
    sym.value = 0
    sym.classList.remove("clicked")
}

refresh.addEventListener('click', ()=> {
    document.location.reload()
})
function predicts(e){
    e.preventDefault();
    axios
    .post('https://mldiagnosis.herokuapp.com/predict',{
        itching: $("#itching").val(),
        skin_rash: $("#skinrash").val(),
        nodal_skin_eruptions : $("#nodal").val(),
        continuous_sneezing: $("#cont").val(),
        shivering: $("#shivering").val(),
        chills: $("#chills").val(),
        joint_pain: $("#jointpain").val(),
        stomach_pain: $("#stomachpain").val(),
        acidity: $("#acidity").val(),
        ulcers_on_tongue: $("#tongueUlcer").val(),
        muscle_wasting: $("#Muscle").val(),
        vomiting: $("#vomiting").val(),
        burning_micturition : $("#bmicturition").val(),
        spotting_urination : $("#surination").val(),
        fatigue: $("#fatigue").val(),
        weight_gain: $("#weightgain").val(),
        anxiety: $("#anxiety").val(),
        cold_hands_and_feets: $("#chands").val(),
        mood_swings: $("#moodswings").val(),
        weight_loss: $("#weightloss").val(),
        restlessness: $("#restlessness").val(),
        lethargy: $("#lethargy").val(),
        patches_in_throat: $("#patchesthroat").val(),
        irregular_sugar_level:$("#irregularsugarlevel").val(),
        cough:$("#cough").val(),
        high_fever:$("#highfever").val(),
        sunken_eyes:$("#sunkeneyes").val(),
        breathlessness:$("#breathlessness").val(),
        sweating:$("#sweating").val(),
        dehydration:$("#dehydration").val(),
        indigestion:$("#indigestion").val(),
        headache:$("#headache").val(),
        yellowish_skin:$("#yellowishskin").val(),
        dark_urine:$("#darkurine").val(),
        nausea:$("#nausea").val(),
        loss_of_appetite:$("#lossappetite").val(),
        pain_behind_the_eyes:$("#painbehindeyes").val(), 
        back_pain:$("#backpain").val(),
        constipation:$("#constipation").val(), 
        abdominal_pain:$("#abdominalpain").val(),
        diarrhoea:$("#diarrhoea").val(),
        mild_fever:$("#mildfever").val(),
        yellow_urine:$("#yellowurine").val(),
        yellowing_of_eyes:$("#yelloweyes").val(), 
        acute_liver_failure:$("#acuteliver").val(),
        fluid_overload:$("#fluidoverload").val(),
        swelling_of_stomach:$("#swellingofstomach").val(),
        swelled_lymph_nodes:$("#swelledlymphnodes").val(),
        malaise:$("#malaise").val(),
        blurred_and_distorted_vision:$("#blurredanddistortedvision").val(),
        phlegm:$("#phlegm").val(),
        throat_irritation:$("#throatirritation").val(),
        redness_of_eyes:$("#rednessofeyes").val(),
        sinus_pressure:$("#sinuspressure").val(),
        runny_nose:$("#runnynose").val(),
        congestion:$("#congestion").val(),
        chest_pain:$("#chestpain").val(),
        weakness_in_limbs:$("#weaknessinlimbs").val(), 
        fast_heart_rate:$("#fastheartrate").val(),
        pain_during_bowel_movements:$("#painduringbowelmovements ").val(),
        pain_in_anal_region:$("#paininanalregion").val(),
        bloody_stool:$("#bloodystool").val(),
        irritation_in_anus:$("#irritationinanus").val(),
        neck_pain:$("#neckpain").val(),
        dizziness:$("#dizziness").val(),
        cramps:$("#cramps").val(),
        bruising:$("#bruising").val(),
        obesity:$("#obesity").val(),
        swollen_legs:$("#swollenlegs").val(),
        swollen_blood_vessels:$("#swollenbloodvessels").val(),
        puffy_face_and_eyes:$("#puffyfaceandeyes").val(),
        enlarged_thyroid:$("#enlargedthyroid").val(),
        brittle_nails:$("#Brittlenail").val(),
        swollen_extremeties:$("#swollenextremeties").val(),
        excessive_hunger:$("#excessivehunger").val(),
        extra_marital_contacts:$("#extramaritalcontacts").val(),
        drying_and_tingling_lips:$("#dryingandtinglinglips").val(),
        slurred_speech:$("#slurredspeech").val(),
        knee_pain:$("#kneepain").val(),
        hip_joint_pain:$("#hipjointpain").val(),
        muscle_weakness:$("#muscleweakness").val(),
        stiff_neck:$("#stiffneck").val(),
        swelling_joints:$("#swellingjoints").val(),
        movement_stiffness:$("#movementstiffness").val(),
        spinning_movements:$("#spinningmovements").val(),
        loss_of_balance:$("#lossofbalance").val(),
        unsteadiness:$("#unsteadiness").val(),
        weakness_of_one_body_side:$("#weaknessofonebodyside").val(),
        loss_of_smell:$("#lossofsmell").val(),
        bladder_discomfort:$("#bladderdiscomfort").val(),
        foul_smell_of_urine:$("#foulsmellofurine").val(),
        continuous_feel_of_urine:$("#continuousfeelofurine").val(),
        passage_of_gases:$("#passageofgases").val(),
        internal_itching:$("#internalitching").val(),
        toxic_look_typhos:0,
        depression:$("#depression").val(),
        irritability:$("#irritability").val(),
        muscle_pain:$("#musclepain").val(),
        altered_sensorium:$("#alteredsensorium").val(),
        red_spots_over_body:$("#redspotsoverbody").val(),
        belly_pain:$("#bellypain").val(),
        abnormal_menstruation:$("#abnormalmenstruation").val(),
        dischromic_patches:$("#dischromicpatches").val(),
        watering_from_eyes:$("#wateringfromeyes").val(),
        increased_appetite:$("#increasedappetite").val(),
        polyuria:$("#polyuria").val(),
        family_history:$("#familyhistory").val(),
        mucoid_sputum:$("#mucoidsputum").val(),
        rusty_sputum:$("#rustysputum").val(),
        lack_of_concentration:$("#lackofconcentration").val(),
        visual_disturbances:$("#visualdisturbances").val(),
        receiving_blood_transfusion:$("#receivingbloodtransfusion").val(),
        receiving_unsterile_injections:$("#receivingunsterileinjections").val(),
        coma:$("#coma").val(),
        stomach_bleeding:$("#stomachbleeding").val(),
        distention_of_abdomen:$("#distentionofabdomen").val(),
        history_of_alcohol_consumption:$("#historyofalcoholconsumption").val(),
        blood_in_sputum:$("#bloodinsputum").val(),
        prominent_veins_on_calf:$("#prominentveinsoncalf").val(),
        palpitations:$("#palpitations").val(), 
        painful_walking:$("#painfulwalking").val(),
        pus_filled_pimples:$("#pusfilledpimples").val(),
        blackheads:$("#blackheads").val(),
        scurring:$("#scurring").val(),
        skin_peeling:$("#skinpeeling").val(),
        silver_like_dusting:$("#silverlikedusting").val(),
        small_dents_in_nails:$("#smalldentsinnails").val(),
        inflammatory_nails:$("#inflammatorynails").val(),
        blister:$("#blister").val(),
        red_sore_around_nose:$("#redsorearoundnose").val(),
        yellow_crust_ooze:$("#yellowcrustooze").val()

    })
    .then(response =>{
        var ans1 =response.data[0]
        var ans2 = response.data[1]
        var ans3 = response.data[2]
        console.log(ans1,ans2,ans3);
        var output=`
        <div class="diag">
        <h1>Top Three Diagnosis</h1>
        <p>${ans1}</p>
        <p>${ans2}</p>
        <p>${ans3}</p>
        <h1>Highest Ranking Diagnosis</h1>
        <p>${ans1}</p>
        </div>`
        result.innerHTML = output;
    })
    .catch(err => {
        console.log(err);
    });
}

