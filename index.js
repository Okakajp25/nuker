import { world, system } from "@minecraft/server";
import * as MCUI from "@minecraft/server-ui";

world.afterEvents.PlayerBreakBlock.subscribe(ev => {
    const { cancel, source } = ev;
})