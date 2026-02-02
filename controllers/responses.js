const { 
    readResponses, appendResponse 
} = require('../utils/fileHandler');

function addResponse(req, res) {
    // grabbing stuff from fetch
    const responseName = req.body.name;
    const responseQuestion = req.body.question;

    // checking for sneaky creatures that edited out maxlength in html
    if(responseQuestion.length > 256) {
        return res.status(500).json({success: false, reason: "Question too long"});
    }
    if(responseName.length > 64) {
        return res.status(500).json({success: false, reason: "Name too long"});
    }

    // forming simple structure for responses, cuz neat structure is needed
    const newQuestion = {
        id: Date.now(),
        name: responseName,
        question: responseQuestion
    }

    // just adding new response
    const all_responses = readResponses();
    all_responses.responses.push(newQuestion);
    try {
        appendResponse(all_responses);
    } catch (err) {
        console.error(err);
        return res.status(500).json({success: false, reason: "Something went wrong on the server." });
    }
    
    // if nothing exploded then YIPPEE
    return res.status(201).json({success: true, reason: "Data submitted successfully" });
}

module.exports = {
    addResponse
};