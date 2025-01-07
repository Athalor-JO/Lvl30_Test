// Increases The Maximum Level for a Player Actor To 30

Hooks.on ("setup", () => {
console.log("---Changing Max Level---");

CONFIG.DND5e.maxlevel = 30;

});