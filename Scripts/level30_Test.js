// Increases The Maximum Level for a Player Actor To 30

Hooks.once("init", () => {
	CONFIG.DND5E.maxLevel = 30;
	console.log("---Changing Max Level---");
});