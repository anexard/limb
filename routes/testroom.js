const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const path = require('path');

const pretest = require('./pretest');
const { testSchema } = require('../schemas/testSchema');
let generatedTest;
let Test;

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/testroom.html'));
});

router.post('/', async (req, res) => {
    mongoose.connect(`mongodb://localhost/tests`, { useNewUrlParser: true })
        .then(() => console.log('Connecting to database...'))
        .catch((err) => console.error('Connection is failed...', err));
    Test = mongoose.model(`${pretest.testSettings.dep}`, testSchema);

    generatedTest = await generateTest(pretest.testSettings);

    res.json(generatedTest);
});

async function generateTest(settings) {
    let test = await Test.find({ title: settings.test });
    test = test[0];
    test.quests = test.quests.slice(settings.intFrom - 1, settings.intTo);

    if (settings.mixQuest) {
        test.quests.sort(() => {
            return Math.random() - 0.5;
        });
        test.quests = test.quests.slice(0, settings.numQuest);
    }
    else {
        test.quests = test.quests.slice(0, settings.numQuest);
        console.log('num' + settings.numQuest);
    }

    if (settings.mixAnsw) {
        test.quests.forEach((el) => {
            el.answers.sort(() => {
                return Math.random() - 0.5;
            });
        });
    }

    if (settings.timer) {
        test.timer = true;
        test.timerDur = settings.timerDur;
    }

    test.int = [settings.intFrom, settings.intTo];
    test.showAnsw = settings.showAnsw;

    return test;
}

module.exports = router;