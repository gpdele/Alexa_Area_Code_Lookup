'use strict';
const Alexa = require('alexa-sdk');

var WELCOME_MESSAGE    = "Welcome to the Alexa Area Code Lookup skill. "; 
var EXIT_SKILL_MESSAGE = "Thank you for using the Alexa Area Code Lookup skill! ";
var ERROR_MESSAGE  	   = "I'm sorry, I don't recognize that Area Code. ";
var REPROMPT_MESSAGE   = "Please tell me an Area Code you are interested in? ";
var HELP_MESSAGE       = "I can tell you the State that belongs to an Area Code.  For example, you can ask me: Whats State is <say-as interpret-as='spell-out'>302</say-as> in?";
var APP_ID             = "amzn1.ask.skill.151bbd3d-7f3e-4ff1-9731-65e433693874";
var APP_TITLE          = "Area Code Lookup";

//=========================================================================================================================================
//=========================================================================================================================================
var dataArray = [
				{AreaCode: "201", StateName:"New Jersey"},
				{AreaCode: "202", StateName:"Washington D.C."},
				{AreaCode: "203", StateName:"Connecticut"},
				{AreaCode: "204", StateName:"Canada - Manitoba"},
				{AreaCode: "205", StateName:"Alabama"},
				{AreaCode: "206", StateName:"Washington"},
				{AreaCode: "207", StateName:"Maine"},
				{AreaCode: "208", StateName:"Idaho"},
				{AreaCode: "209", StateName:"California"},
				{AreaCode: "210", StateName:"Texas"},
				{AreaCode: "212", StateName:"New York"},
				{AreaCode: "213", StateName:"California"},
				{AreaCode: "214", StateName:"Texas"},
				{AreaCode: "215", StateName:"Pennsylvania"},
				{AreaCode: "216", StateName:"Ohio"},
				{AreaCode: "217", StateName:"Illinois"},
				{AreaCode: "218", StateName:"Minnesota"},
				{AreaCode: "219", StateName:"Indiana"},
				{AreaCode: "220", StateName:"Ohio"},
				{AreaCode: "224", StateName:"Illinois"},
				{AreaCode: "225", StateName:"Louisiana"},
				{AreaCode: "226", StateName:"Canada - Ontario"},
				{AreaCode: "228", StateName:"Mississippi"},
				{AreaCode: "229", StateName:"Georgia"},
				{AreaCode: "231", StateName:"Michigan"},
				{AreaCode: "234", StateName:"Ohio"},
				{AreaCode: "236", StateName:"Canada - British Columbia"},
				{AreaCode: "239", StateName:"Florida"},
				{AreaCode: "240", StateName:"Maryland"},
				{AreaCode: "242", StateName:"Bahamas"},
				{AreaCode: "246", StateName:"Barbados"},
				{AreaCode: "248", StateName:"Michigan"},
				{AreaCode: "249", StateName:"Canada - Ontario"},
				{AreaCode: "250", StateName:"Canada - British Columbia"},
				{AreaCode: "251", StateName:"Alabama"},
				{AreaCode: "252", StateName:"North Carolina"},
				{AreaCode: "253", StateName:"Washington"},
				{AreaCode: "254", StateName:"Texas"},
				{AreaCode: "256", StateName:"Alabama"},
				{AreaCode: "260", StateName:"Indiana"},
				{AreaCode: "262", StateName:"Wisconsin"},
				{AreaCode: "264", StateName:"Anguilla"},
				{AreaCode: "267", StateName:"Pennsylvania"},
				{AreaCode: "268", StateName:"Antigua & Barbuda"},
				{AreaCode: "269", StateName:"Michigan"},
				{AreaCode: "270", StateName:"Kentucky"},
				{AreaCode: "272", StateName:"Pennsylvania"},
				{AreaCode: "276", StateName:"Virginia"},
				{AreaCode: "281", StateName:"Texas"},
				{AreaCode: "284", StateName:"British Virgin Islands"},
				{AreaCode: "289", StateName:"Canada - Ontario"},
				{AreaCode: "301", StateName:"Maryland"},
				{AreaCode: "302", StateName:"Delaware"},
				{AreaCode: "303", StateName:"Colorado"},
				{AreaCode: "304", StateName:"West Virginia"},
				{AreaCode: "305", StateName:"Florida"},
				{AreaCode: "306", StateName:"Canada - Saskatchewan"},
				{AreaCode: "307", StateName:"Wyoming"},
				{AreaCode: "308", StateName:"Nebraska"},
				{AreaCode: "309", StateName:"Illinois"},
				{AreaCode: "310", StateName:"California"},
				{AreaCode: "312", StateName:"Illinois"},
				{AreaCode: "313", StateName:"Michigan"},
				{AreaCode: "314", StateName:"Missouri"},
				{AreaCode: "315", StateName:"New York"},
				{AreaCode: "316", StateName:"Kansas"},
				{AreaCode: "317", StateName:"Indiana"},
				{AreaCode: "318", StateName:"Louisiana"},
				{AreaCode: "319", StateName:"Iowa"},
				{AreaCode: "320", StateName:"Minnesota"},
				{AreaCode: "321", StateName:"Florida"},
				{AreaCode: "323", StateName:"California"},
				{AreaCode: "325", StateName:"Texas"},
				{AreaCode: "330", StateName:"Ohio"},
				{AreaCode: "331", StateName:"Illinois"},
				{AreaCode: "334", StateName:"Alabama"},
				{AreaCode: "336", StateName:"North Carolina"},
				{AreaCode: "337", StateName:"Louisiana"},
				{AreaCode: "339", StateName:"Massachusetts"},
				{AreaCode: "340", StateName:"US Virgin Islands"},
				{AreaCode: "343", StateName:"Canada - Ontario"},
				{AreaCode: "345", StateName:"Cayman Islands"},
				{AreaCode: "346", StateName:"Texas"},
				{AreaCode: "347", StateName:"New York"},
				{AreaCode: "351", StateName:"Massachusetts"},
				{AreaCode: "352", StateName:"Florida"},
				{AreaCode: "360", StateName:"Washington"},
				{AreaCode: "361", StateName:"Texas"},
				{AreaCode: "364", StateName:"Kentucky"},
				{AreaCode: "365", StateName:"Canada - Ontario"},
				{AreaCode: "380", StateName:"Ohio"},
				{AreaCode: "385", StateName:"Utah"},
				{AreaCode: "386", StateName:"Florida"},
				{AreaCode: "401", StateName:"Rhode Island"},
				{AreaCode: "402", StateName:"Nebraska"},
				{AreaCode: "403", StateName:"Canada - Alberta"},
				{AreaCode: "404", StateName:"Georgia"},
				{AreaCode: "405", StateName:"Oklahoma"},
				{AreaCode: "406", StateName:"Montana"},
				{AreaCode: "407", StateName:"Florida"},
				{AreaCode: "408", StateName:"California"},
				{AreaCode: "409", StateName:"Texas"},
				{AreaCode: "410", StateName:"Maryland"},
				{AreaCode: "412", StateName:"Pennsylvania"},
				{AreaCode: "413", StateName:"Massachusetts"},
				{AreaCode: "414", StateName:"Wisconsin"},
				{AreaCode: "415", StateName:"California"},
				{AreaCode: "416", StateName:"Canada - Ontario"},
				{AreaCode: "417", StateName:"Missouri"},
				{AreaCode: "418", StateName:"Canada - Quebec"},
				{AreaCode: "419", StateName:"Ohio"},
				{AreaCode: "423", StateName:"Tennessee"},
				{AreaCode: "424", StateName:"California"},
				{AreaCode: "425", StateName:"Washington"},
				{AreaCode: "430", StateName:"Texas"},
				{AreaCode: "431", StateName:"Canada - Manitoba"},
				{AreaCode: "432", StateName:"Texas"},
				{AreaCode: "434", StateName:"Virginia"},
				{AreaCode: "435", StateName:"Utah"},
				{AreaCode: "437", StateName:"Canada - Ontario"},
				{AreaCode: "438", StateName:"Canada - Quebec"},
				{AreaCode: "440", StateName:"Ohio"},
				{AreaCode: "441", StateName:"Bermuda"},
				{AreaCode: "442", StateName:"California"},
				{AreaCode: "443", StateName:"Maryland"},
				{AreaCode: "450", StateName:"Canada - Quebec"},
				{AreaCode: "456", StateName:"Carrier Services"},
				{AreaCode: "458", StateName:"Oregon"},
				{AreaCode: "463", StateName:"Indiana"},
				{AreaCode: "469", StateName:"Texas"},
				{AreaCode: "470", StateName:"Georgia"},
				{AreaCode: "473", StateName:"Grenada"},
				{AreaCode: "475", StateName:"Connecticut"},
				{AreaCode: "478", StateName:"Georgia"},
				{AreaCode: "479", StateName:"Arkansas"},
				{AreaCode: "480", StateName:"Arizona"},
				{AreaCode: "484", StateName:"Pennsylvania"},
				{AreaCode: "500", StateName:"Personal Communications Services"},
				{AreaCode: "501", StateName:"Arkansas"},
				{AreaCode: "502", StateName:"Kentucky"},
				{AreaCode: "503", StateName:"Oregon"},
				{AreaCode: "504", StateName:"Louisiana"},
				{AreaCode: "505", StateName:"New Mexico"},
				{AreaCode: "506", StateName:"Canada - New Brunswick"},
				{AreaCode: "507", StateName:"Minnesota"},
				{AreaCode: "508", StateName:"Massachusetts"},
				{AreaCode: "509", StateName:"Washington"},
				{AreaCode: "510", StateName:"California"},
				{AreaCode: "512", StateName:"Texas"},
				{AreaCode: "513", StateName:"Ohio"},
				{AreaCode: "514", StateName:"Canada - Quebec"},
				{AreaCode: "515", StateName:"Iowa"},
				{AreaCode: "516", StateName:"New York"},
				{AreaCode: "517", StateName:"Michigan"},
				{AreaCode: "518", StateName:"New York"},
				{AreaCode: "519", StateName:"Canada - Ontario"},
				{AreaCode: "520", StateName:"Arizona"},
				{AreaCode: "530", StateName:"California"},
				{AreaCode: "531", StateName:"Nebraska"},
				{AreaCode: "533", StateName:"Personal Communications Services"},
				{AreaCode: "534", StateName:"Wisconsin"},
				{AreaCode: "539", StateName:"Oklahoma"},
				{AreaCode: "540", StateName:"Virginia"},
				{AreaCode: "541", StateName:"Oregon"},
				{AreaCode: "544", StateName:"Personal Communications Services"},
				{AreaCode: "551", StateName:"New Jersey"},
				{AreaCode: "559", StateName:"California"},
				{AreaCode: "561", StateName:"Florida"},
				{AreaCode: "562", StateName:"California"},
				{AreaCode: "563", StateName:"Iowa"},
				{AreaCode: "566", StateName:"Personal Communications Services"},
				{AreaCode: "567", StateName:"Ohio"},
				{AreaCode: "570", StateName:"Pennsylvania"},
				{AreaCode: "571", StateName:"Virginia"},
				{AreaCode: "573", StateName:"Missouri"},
				{AreaCode: "574", StateName:"Indiana"},
				{AreaCode: "575", StateName:"New Mexico"},
				{AreaCode: "577", StateName:"Personal Communications Services"},
				{AreaCode: "579", StateName:"Quebec"},
				{AreaCode: "580", StateName:"Oklahoma"},
				{AreaCode: "581", StateName:"Quebec"},
				{AreaCode: "585", StateName:"New York"},
				{AreaCode: "586", StateName:"Michigan"},
				{AreaCode: "587", StateName:"Canada - Alberta"},
				{AreaCode: "600", StateName:"Canada only, Non Geographic"},
				{AreaCode: "601", StateName:"Mississippi"},
				{AreaCode: "602", StateName:"Arizona"},
				{AreaCode: "603", StateName:"New Hampshire"},
				{AreaCode: "604", StateName:"Canada - British Columbia"},
				{AreaCode: "605", StateName:"South Dakota"},
				{AreaCode: "606", StateName:"Kentucky"},
				{AreaCode: "607", StateName:"New York"},
				{AreaCode: "608", StateName:"Wisconsin"},
				{AreaCode: "609", StateName:"New Jersey"},
				{AreaCode: "610", StateName:"Pennsylvania"},
				{AreaCode: "612", StateName:"Minnesota"},
				{AreaCode: "613", StateName:"Canada - Ontario"},
				{AreaCode: "614", StateName:"Ohio"},
				{AreaCode: "615", StateName:"Tennessee"},
				{AreaCode: "616", StateName:"Michigan"},
				{AreaCode: "617", StateName:"Massachusetts"},
				{AreaCode: "618", StateName:"Illinois"},
				{AreaCode: "619", StateName:"California"},
				{AreaCode: "620", StateName:"Kansas"},
				{AreaCode: "623", StateName:"Arizona"},
				{AreaCode: "626", StateName:"California"},
				{AreaCode: "628", StateName:"California"},
				{AreaCode: "629", StateName:"Tennessee"},
				{AreaCode: "630", StateName:"Illinois"},
				{AreaCode: "631", StateName:"New York"},
				{AreaCode: "636", StateName:"Missouri"},
				{AreaCode: "639", StateName:"Canada - Saskatchewan"},
				{AreaCode: "641", StateName:"Iowa"},
				{AreaCode: "646", StateName:"New York"},
				{AreaCode: "647", StateName:"Canada - Ontario"},
				{AreaCode: "649", StateName:"Turks & Caicos"},
				{AreaCode: "650", StateName:"California"},
				{AreaCode: "651", StateName:"Minnesota"},
				{AreaCode: "657", StateName:"California"},
				{AreaCode: "660", StateName:"Missouri"},
				{AreaCode: "661", StateName:"California"},
				{AreaCode: "662", StateName:"Mississippi"},
				{AreaCode: "664", StateName:"Montserrat"},
				{AreaCode: "667", StateName:"Maryland"},
				{AreaCode: "669", StateName:"California"},
				{AreaCode: "670", StateName:"Northern Mariana Isl."},
				{AreaCode: "671", StateName:"Guam"},
				{AreaCode: "678", StateName:"Georgia"},
				{AreaCode: "680", StateName:"New York"},
				{AreaCode: "681", StateName:"West Virginia"},
				{AreaCode: "682", StateName:"Texas"},
				{AreaCode: "684", StateName:"American Samoa"},
				{AreaCode: "700", StateName:"Carrier Services"},
				{AreaCode: "701", StateName:"North Dakota"},
				{AreaCode: "702", StateName:"Nevada"},
				{AreaCode: "703", StateName:"Virginia"},
				{AreaCode: "704", StateName:"North Carolina"},
				{AreaCode: "705", StateName:"Canada - Ontario"},
				{AreaCode: "706", StateName:"Georgia"},
				{AreaCode: "707", StateName:"California"},
				{AreaCode: "708", StateName:"Illinois"},
				{AreaCode: "709", StateName:"Canada - Newfoundland"},
				{AreaCode: "710", StateName:"US Government"},
				{AreaCode: "712", StateName:"Iowa"},
				{AreaCode: "713", StateName:"Texas"},
				{AreaCode: "714", StateName:"California"},
				{AreaCode: "715", StateName:"Wisconsin"},
				{AreaCode: "716", StateName:"New York"},
				{AreaCode: "717", StateName:"Pennsylvania"},
				{AreaCode: "718", StateName:"New York"},
				{AreaCode: "719", StateName:"Colorado"},
				{AreaCode: "720", StateName:"Colorado"},
				{AreaCode: "721", StateName:"Sint Maarten"},
				{AreaCode: "724", StateName:"Pennsylvania"},
				{AreaCode: "725", StateName:"Nevada"},
				{AreaCode: "727", StateName:"Florida"},
				{AreaCode: "731", StateName:"Tennessee"},
				{AreaCode: "732", StateName:"New Jersey"},
				{AreaCode: "734", StateName:"Michigan"},
				{AreaCode: "740", StateName:"Ohio"},
				{AreaCode: "743", StateName:"North Carolina"},
				{AreaCode: "747", StateName:"California"},
				{AreaCode: "754", StateName:"Florida"},
				{AreaCode: "757", StateName:"Virginia"},
				{AreaCode: "758", StateName:"St. Lucia"},
				{AreaCode: "760", StateName:"California"},
				{AreaCode: "762", StateName:"Georgia"},
				{AreaCode: "763", StateName:"Minnesota"},
				{AreaCode: "765", StateName:"Indiana"},
				{AreaCode: "767", StateName:"Dominica"},
				{AreaCode: "769", StateName:"Mississippi"},
				{AreaCode: "770", StateName:"Georgia"},
				{AreaCode: "772", StateName:"Florida"},
				{AreaCode: "773", StateName:"Illinois"},
				{AreaCode: "774", StateName:"Massachusetts"},
				{AreaCode: "775", StateName:"Nevada"},
				{AreaCode: "778", StateName:"Canada - British Columbia"},
				{AreaCode: "779", StateName:"Illinois"},
				{AreaCode: "780", StateName:"Canada - Alberta"},
				{AreaCode: "781", StateName:"Massachusetts"},
				{AreaCode: "782", StateName:"Canada - Nova Scotia/PEI"},
				{AreaCode: "784", StateName:"St. Vincent and the Grenadines"},
				{AreaCode: "785", StateName:"Kansas"},
				{AreaCode: "786", StateName:"Florida"},
				{AreaCode: "787", StateName:"Puerto Rico"},
				{AreaCode: "800", StateName:"Toll free"},
				{AreaCode: "801", StateName:"Utah"},
				{AreaCode: "802", StateName:"Vermont"},
				{AreaCode: "803", StateName:"South Carolina"},
				{AreaCode: "804", StateName:"Virginia"},
				{AreaCode: "805", StateName:"California"},
				{AreaCode: "806", StateName:"Texas"},
				{AreaCode: "807", StateName:"Canada - Ontario"},
				{AreaCode: "808", StateName:"Hawaii"},
				{AreaCode: "809", StateName:"Dominican Republic"},
				{AreaCode: "810", StateName:"Michigan"},
				{AreaCode: "812", StateName:"Indiana"},
				{AreaCode: "813", StateName:"Florida"},
				{AreaCode: "814", StateName:"Pennsylvania"},
				{AreaCode: "815", StateName:"Illinois"},
				{AreaCode: "816", StateName:"Missouri"},
				{AreaCode: "817", StateName:"Texas"},
				{AreaCode: "818", StateName:"California"},
				{AreaCode: "819", StateName:"Canada - Quebec"},
				{AreaCode: "825", StateName:"Canada - Alberta"},
				{AreaCode: "828", StateName:"North Carolina"},
				{AreaCode: "829", StateName:"Dominican Republic"},
				{AreaCode: "830", StateName:"Texas"},
				{AreaCode: "831", StateName:"California"},
				{AreaCode: "832", StateName:"Texas"},
				{AreaCode: "843", StateName:"South Carolina"},
				{AreaCode: "844", StateName:"Toll free"},
				{AreaCode: "845", StateName:"New York"},
				{AreaCode: "847", StateName:"Illinois"},
				{AreaCode: "848", StateName:"New Jersey"},
				{AreaCode: "849", StateName:"Dominican Republic"},
				{AreaCode: "850", StateName:"Florida"},
				{AreaCode: "854", StateName:"South Carolina"},
				{AreaCode: "855", StateName:"Toll free"},
				{AreaCode: "856", StateName:"New Jersey"},
				{AreaCode: "857", StateName:"Massachusetts"},
				{AreaCode: "858", StateName:"California"},
				{AreaCode: "859", StateName:"Kentucky"},
				{AreaCode: "860", StateName:"Connecticut"},
				{AreaCode: "862", StateName:"New Jersey"},
				{AreaCode: "863", StateName:"Florida"},
				{AreaCode: "864", StateName:"South Carolina"},
				{AreaCode: "865", StateName:"Tennessee"},
				{AreaCode: "866", StateName:"Toll free"},
				{AreaCode: "867", StateName:"Canada - NW Territories, Nunavut, Yukon"},
				{AreaCode: "868", StateName:"Trinidad & Tobago"},
				{AreaCode: "869", StateName:"St. Kitts & Nevis"},
				{AreaCode: "870", StateName:"Arkansas"},
				{AreaCode: "872", StateName:"Illinois"},
				{AreaCode: "873", StateName:"Canada - Quebec"},
				{AreaCode: "876", StateName:"Jamaica"},
				{AreaCode: "877", StateName:"Toll free"},
				{AreaCode: "878", StateName:"Pennsylvania"},
				{AreaCode: "888", StateName:"Toll free"},
				{AreaCode: "900", StateName:"Pay per call"},
				{AreaCode: "901", StateName:"Tennessee"},
				{AreaCode: "902", StateName:"Canada - Nova Scotia/PEI"},
				{AreaCode: "903", StateName:"Texas"},
				{AreaCode: "904", StateName:"Florida"},
				{AreaCode: "905", StateName:"Canada - Ontario"},
				{AreaCode: "906", StateName:"Michigan"},
				{AreaCode: "907", StateName:"Alaska"},
				{AreaCode: "908", StateName:"New Jersey"},
				{AreaCode: "909", StateName:"California"},
				{AreaCode: "910", StateName:"North Carolina"},
				{AreaCode: "911", StateName:"Emergency"},
				{AreaCode: "912", StateName:"Georgia"},
				{AreaCode: "913", StateName:"Kansas"},
				{AreaCode: "914", StateName:"New York"},
				{AreaCode: "915", StateName:"Texas"},
				{AreaCode: "916", StateName:"California"},
				{AreaCode: "917", StateName:"New York"},
				{AreaCode: "918", StateName:"Oklahoma"},
				{AreaCode: "919", StateName:"North Carolina"},
				{AreaCode: "920", StateName:"Wisconsin"},
				{AreaCode: "925", StateName:"California"},
				{AreaCode: "928", StateName:"Arizona"},
				{AreaCode: "929", StateName:"New York"},
				{AreaCode: "930", StateName:"Indiana"},
				{AreaCode: "931", StateName:"Tennessee"},
				{AreaCode: "934", StateName:"New York"},
				{AreaCode: "936", StateName:"Texas"},
				{AreaCode: "937", StateName:"Ohio"},
				{AreaCode: "938", StateName:"Alabama"},
				{AreaCode: "939", StateName:"Puerto Rico"},
				{AreaCode: "940", StateName:"Texas"},
				{AreaCode: "941", StateName:"Florida"},
				{AreaCode: "947", StateName:"Michigan"},
				{AreaCode: "949", StateName:"California"},
				{AreaCode: "951", StateName:"California"},
				{AreaCode: "952", StateName:"Minnesota"},
				{AreaCode: "954", StateName:"Florida"},
				{AreaCode: "956", StateName:"Texas"},
				{AreaCode: "959", StateName:"Connecticut"},
				{AreaCode: "970", StateName:"Colorado"},
				{AreaCode: "971", StateName:"Oregon"},
				{AreaCode: "972", StateName:"Texas"},
				{AreaCode: "973", StateName:"New Jersey"},
				{AreaCode: "978", StateName:"Massachusetts"},
				{AreaCode: "979", StateName:"Texas"},
				{AreaCode: "980", StateName:"North Carolina"},
				{AreaCode: "984", StateName:"North Carolina"},
				{AreaCode: "985", StateName:"Louisiana"},
				{AreaCode: "989", StateName:"Michigan"}
            ];

//=========================================================================================================================================
//=========================================================================================================================================

function getItemAreaCode(slots)
{
    var propertyArray = Object.getOwnPropertyNames(dataArray[0]);
    var value;
    
    for (var slot in slots)
    {
        if (slots[slot].value !== undefined)
        {
            value = slots[slot].value;
            for (var property in propertyArray)
            {
                var item = dataArray.filter(x => x[propertyArray[property]].toString().toLowerCase() === slots[slot].value.toString().toLowerCase());
                if (item.length > 0)
                {
                    return item[0];
                }
            }
        }
    }
    return value;
}

// --------------- Helpers that build all of the responses -----------------------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            //type: 'PlainText',
            //text: output,
            type: 'SSML',
            ssml: "<speak>" + output + "</speak>",
        },
        card: {
            type: 'Simple',
            title: `${title}`,
            //content: `${output}`,
        },
        reprompt: {
            outputSpeech: {
                //type: 'PlainText',
                //text: repromptText,
                type: 'SSML',
                ssml: "<speak>" + repromptText + "</speak>",
            },
        },
        shouldEndSession,
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: '1.0',
        sessionAttributes,
        response: speechletResponse,
    };
}

//This function returns a descriptive sentence about the data. 
function getSpeechDescription(item)
{
    var sentence = "<say-as interpret-as='spell-out'>" + item.AreaCode + "</say-as> is in " + item.StateName + ".";
                   
    return sentence;
}

// --------------- Functions that control the skill's behavior -----------------------

function getWelcomeResponse(callback) {
    console.log(`(GPDL) Inside Function: getWelcomeResponse`);        
    const sessionAttributes = {};
    const cardTitle = APP_TITLE;
    const speechOutput = WELCOME_MESSAGE + HELP_MESSAGE;
    const repromptText = HELP_MESSAGE; 
    const shouldEndSession = false;

    callback(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function retrieveAreaCode(intent, session, callback) {
    console.log(`(GPDL) Inside Function: retireveDialCode | intent.slots.AreaCode.value:` + intent.slots.AreaCode.value );    

    const sessionAttributes = {};
    const repromptText = REPROMPT_MESSAGE;
    const shouldEndSession = false;

    // Get Code based on Slot
    var item = getItemAreaCode(intent.slots);
    // const cardTitle = item.CountryName;

    if (item.AreaCode !== undefined) {
        // let cardTitle = intent.slots.CountryName.value;
        let cardTitle = item.AreaCode;        
        let speechOutput = getSpeechDescription(item);        
        callback(sessionAttributes,
             buildSpeechletResponse(cardTitle + " " + item.StateName, speechOutput, repromptText, shouldEndSession));    
    }
    else {
        let cardTitle = intent.slots.AreaCode.value;
        callback(sessionAttributes,
             buildSpeechletResponse(cardTitle, ERROR_MESSAGE, repromptText, shouldEndSession));    
    }
}    

function handleSessionEndRequest(callback) {
    console.log(`(GPDL) Inside Function: handleSessionEndRequest`);        
    const sessionAttributes = {};
    const cardTitle = APP_TITLE;
    const speechOutput = EXIT_SKILL_MESSAGE;
    const shouldEndSession = true;
    callback(sessionAttributes, buildSpeechletResponse(cardTitle, speechOutput, null, shouldEndSession));
}

// --------------- Events -----------------------

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log(`(GPDL) Inside Function: onSessionStarted requestId=${sessionStartedRequest.requestId}, sessionId=${session.sessionId}`);
}

/**
 * Called when the user launches the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log(`(GPDL) Inside Function: onLaunch requestId=${launchRequest.requestId}, sessionId=${session.sessionId}`);
    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log(`(GPDL) Inside Function: onIntent requestId=${intentRequest.requestId}, sessionId=${session.sessionId}`);

    const intent = intentRequest.intent;
    const intentName = intentRequest.intent.name;

    // Dispatch to your skill's intent handlers
    if (intentName === 'AreaCodeIntent') {
        retrieveAreaCode(intent, session, callback);
    } else if (intentName === 'AMAZON.HelpIntent') {
        getWelcomeResponse(callback);
    } else if (intentName === 'AMAZON.StopIntent' || intentName === 'AMAZON.CancelIntent') {
        handleSessionEndRequest(callback);
    } else {
        console.log(`(GPDL) Inside Function: onIntent - THROW NEW ERROR`);        
        throw new Error('Invalid intent');        
    }
}

// --------------- Events -----------------------

exports.handler = (event, context, callback) => {

    try {
        console.log(`(GPDL) event.session.application.applicationId=${event.session.application.applicationId}`);
        console.log(`(GPDL) Request Type:=${event.request.type}`);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */
        if (event.session.application.applicationId !== APP_ID) {
             callback('(GPDL) Invalid Application ID');
        }

        if (event.session.new) {
            onSessionStarted({ requestId: event.request.requestId }, event.session);
        }

        if (event.request.type === 'LaunchRequest') {
            onLaunch(event.request,
                event.session,
                (sessionAttributes, speechletResponse) => {
                    callback(null, buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === 'IntentRequest') {
            onIntent(event.request,
                event.session,
                (sessionAttributes, speechletResponse) => {
                    callback(null, buildResponse(sessionAttributes, speechletResponse));
                });
//        } else if (event.request.type === 'SessionEndedRequest') {
//            console.log(`(GPDL) In: SessionEndedRequest`);                    
//            callback();
        }

    } catch (err) {
        console.log(`(GPDL) In: Catch(err)`);        
        callback(err);
    }    
};


