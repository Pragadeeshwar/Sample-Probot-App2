/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

const core = require('@actions/core');
const github = require('@actions/github');
const yaml = require('yml');

  app.on("push", async (context) => {
	const core = require('@actions/core');
	const github = require('@actions/github');
	const yaml = require('yml');

    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
	app.log.info(context);
	
	/*try {
		const nameToGreet = core.getInput('who-to-greet');
		console.log(`Hello $[nameToGreet]!`);
		const time = (new Date()).toTimeSting();
		core.setOutput("time",time);
		
		const payload = JSON.stringify(github.context.payload, undefined, 2);
		console.log(`The event payload: $[payload]`);
	} catch (error) {
		core.satisfied(error.message);
	}*/
  });
  
  

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
