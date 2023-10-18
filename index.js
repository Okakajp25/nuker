import { world, system } from "@minecraft/server";
import * as MCUI from "@minecraft/server-ui";

world.afterEvents.PlayerBreakBlock.subscribe(ev => {
    const { itemStackAfterBreak, 
        itemStackBeforeBreak, 
        player 
    } = ev;
    
})