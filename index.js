/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  
  app.log.info("Yay, the app was loaded!");

  app.on("push", async (context) => {
	
	const createIssue = context.issue({
		title: "New Issue",
		body: "The repository has been updated",
	});
	return context.octokit.issues.create(createIssue);
	app.log.info("context");
	
  });

};
