// Increases The Maximum Level for a Player Actor To 30

Hooks.once("init", () => {
	CONFIG.DND5e.maxLevel = 30;
	console.log("---Changing Max Level---");
});