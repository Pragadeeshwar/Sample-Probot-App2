/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("push", async (context) => {
	
	const createIssue = context.issue({
		body: "The repository has been updated",
	});
	return github.issues.create(createIssue);
	app.log.info("context");
	
  });
  
  

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
