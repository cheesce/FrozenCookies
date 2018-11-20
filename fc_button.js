$('#logButton').before(
$('<div id="fcButton" />').addClass('button')
.html('Frozen<br />Cookies')
.click(function(){
	Game.ShowMenu('fc_menu');
})
);

$('#logButton').hide();

$('<style type="text/css">')
.html(
'#fcEfficiencyTable {width: 100%;}' +
'#fcButton {top: 0px; right: 0px; padding-top: 12px; font-size: 90%; background-position: -96px 0px;}' +
'.ui-dialog {z-index:1000000;}'
)
.appendTo('head');

// todo: add bind for autoascend
// Press 'a' to toggle autobuy.
// Press 'b' to pop up a copyable window with building spread.
// Press 'c' to toggle auto-GC
// Press 'e' to pop up a copyable window with your export string
// Press 'r' to pop up the reset window
// Press 's' to do a manual save
// Press 'w' to display a wrinkler-info window
document.addEventListener('keydown', function(event) {
    if (!Game.promptOn) {
        if (event.keyCode == 65) {
            cyclePreference('autoBuy');
		}
        if (event.keyCode == 66) {
            copyToClipboard(getBuildingSpread());
		}
        if (event.keyCode == 67) {
            cyclePreference('autoGC');
		}
        if (event.keyCode == 69) {
            copyToClipboard(Game.WriteSave(true));
		}
        if (event.keyCode == 82) {
            Game.Reset();
		}
        if (event.keyCode == 83) {
            Game.WriteSave();
		}
        if (event.keyCode == 87) {
            Game.Notify('Wrinkler Info', 'Popping all wrinklers will give you ' + Beautify(wrinklerValue())
            + ' cookies. <input type="button" value="Click here to pop all wrinklers" onclick="Game.CollectWrinklers()"></input>', [19, 8], 7);
		}
	}
});	

FrozenCookies.preferenceValues = {
    'autoBuy':{
        'hint':'Automatically buy the most efficient building when you\'ve met its cost',
        'display':["Autobuy OFF","Autobuy ON"],
        'default':0
	},
    'autoBulk':{
        'hint':'Automatically set buildings to be bought in bulk after reincarnation',
        'display':['Auto Bulkbuy OFF', 'Auto Bulkbuy x10', 'Auto Bulkbuy x100'],
        'default':0
	},
	'autoAscend':{
        'hint':'Automatically ascend when your heavenly chip count hits a certain number. (note: this will skip the upgrade screen)',
        'display':["Autoascend OFF", "Autoascend ON"],
        'default':0,
        'extras':'<a class="option" id="chipsToAscend" onclick="updateAscendAmount(\'HCAscendAmount\');">${HCAscendAmount} heavenly chips</a>'
	},   
    'autoGC':{
        'hint':'Automatically click Golden Cookies when they appear',
        'display':["Autoclick GC OFF", "Autoclick GC ON"],
        'default':0
	},  
	'autoReindeer':{
        'hint':'Automatically click reindeer',
        'display':['Autoclick Reindeer OFF', 'Autoclick Reindeer ON'],
        'default':0
	},
	'autoWrinkler':{
        'hint':'Automatically pop wrinklers efficiently or instantly',
        'display':['Autopop Wrinklers OFF', 'Autopop Wrinklers Efficiently', 'Autopop Wrinklers Instantly'],
        'default':0
	},
    'shinyPop':{
        'hint':'Protect the endangered Shiny Wrinkler from being auomatically popped',
        'display':['Save Shiny Wrinklers ON', 'Save Shiny Wrinklers OFF'],
        'default':0
	},
    'autoSL':{
        'hint':'Automatically harvest sugar lumps when ripe, with option to automatically swap in Rigidel',
        'display':["Autoharvest SL OFF", "Autoharvest SL ON", "Autoharvest SL ON + Auto Rigidel"],
        'default':0
	}, 
    'autoClick':{
        'hint':'Automatically click on large cookie.',
        'display':['AutoClick OFF', 'AutoClick ON'],
        'default':0,
 		'extras':'<a class="option" id="cookieClickSpeed" onclick="updateSpeed(\'cookieClickSpeed\');">${cookieClickSpeed} clicks/sec</a>',
        'extras2':'<a class="option" id="frenzyClickSpeed" onclick="updateSpeed(\'frenzyClickSpeed\');">${frenzyClickSpeed} frency clicks/sec</a>'
	},
	'blacklist':{
        'hint':'Blacklist purchases from the efficiency calculations',
        'display':['No Blacklist', 'Speedrun Blacklist', 'Hardcore Blacklist', 'Grandmapocalypse Mode', 'No Buildings'],
        'default':0
	},
	'autoBlacklistOff':{
        'hint':'Automatically turns off a blacklist once the goal for that blacklist is achieved',
        'display':['Auto Blacklist OFF', 'Auto Blacklist ON'],
        'default':0
	},	
	/*  'timeTravelMethod':{
        'hint':'Time travel is unstable. This determines how time travel works. If you\'re unsure, don\'t touch this.',
        'display':['Time Travel DISABLED'],//,'Purchases by Estimated Effective CPS','Purchases by Simulated Real Time','Heavenly Chips by Estimated Effective CPS','Heavenly Chips by Simulated Real Time'],
        'default':0,
        'extras':'<a class="option" id="timeTravelPurchases" onclick="updateTimeTravelAmount();">Set Time Travel Amount</a>'
	},*/
    'pastemode':{
        'hint':'Always autobuy the least efficient purchase. This is a stupid idea, you should never turn this on.',
        'display':['Pastemode OFF','Pastemode ON'],
        'default':0
	},
  /*  'simulatedGCPercent':{
        'hint':'What percentage of Golden Cookies should be assumed as "clicked" for GC efficiency calculations (100% recommended)',
        'display':["0%","100%"],
        'default':1
	},
  */
	'fpsModifier':{
        'hint':'Do not use. The frame rate at which the game runs. 60 is twice as fast, 15 is half as fast, etc. If you\'re not sure, keep this at 30',
        'display':['24','25','30','48','50','60','72','90','100','120','144','200','240','300'],
        'default':2
	},
    'logging':{
        'hint':'Display detailed logs in the javascript console',
        'display':['Logging OFF', 'Logging ON'],
        'default':1
	},
    'trackStats':{
        'hint':'Track your CPS/HC earned over time during a single session to enable graphing. This may end up being *extremely* memory-intensive',
        'display':['Tracking OFF', 'Every 60s', 'Every 30m', 'Every 1h', 'Every 24h', 'On upgrades', 'Smart Timing'],
        'default':0,
        'extras':'<a class="option" id="viewStats" onclick="viewStatGraphs();">View Stat Graphs</a>'
	},
    'numberDisplay':{
        'hint':'Change how numbers are shortened',
        'display':["Raw Numbers","Full Word (million, billion)","Initials (M, B)","SI Units (M, G, T)", "Scientific Notation (6.3e12)"],
        'default':1
	},
    'autoGS':{
        'hint':'Automatically turn on the Golden Switch during Dragonflight and Click Frenzy',
        'display':['Auto-Switch OFF','Auto-Switch ON'],
        'default':0
	},
    'autoGodzamok':{
        'hint':'Automatically sell all cursors during Dragonflight and Click Frenzy if you worship Godzamok ("Sane" prevents rapid buy/sell spam)',
        'display':['Auto-Godzamok OFF','Auto-Godzamok ON','Auto-Godzamok ON (Sane)','Auto-Godzamok (REALLY INSANE)'],
        'default':0
	},
    'cursorLimit':{
        'hint':'Limit max number of cursors to keep Godzamok useful',
        'display':['Cursor Limit OFF','Cursor Limit ON'],
        'default':0,
        'extras':'<a class="option" id="cursorMax" onclick="updateCursorMax(\'cursorMax\');">${cursorMax} cursors</a>'
	},
    'autoSpell':{
        'hint':'Automatically cast selected spell when your mana is full',
        'display':["Auto Cast OFF","Cojure Baked Goods","Force the Hand of Fate","Spontaneous Edifice","Haggler's Charm (cheapest)"],
        'default':0,
        'extras':'<a class="option" id="minCpSMult" onclick="updateCpSMultMin(\'minCpSMult\');">x${minCpSMult} minimum Frenzy</a>'
	},
    'holdSEBank':{
        'hint':'Maintain a bank for Spontaneous Edifice (already enabled if Auto Casting SE)',
        'display':["SE Bank OFF","SE Bank ON"],
        'default':0,
	},
    'towerLimit':{
        'hint':'Stop Autobuying Wizard Towers at selected Max Mana, for spellcasting efficiency',
        'display':['Wizard Tower Cap OFF','Wizard Tower Cap ON'],
        'default':0,
        'extras':'<a class="option" id="manaMax" onclick="updateManaMax(\'manaMax\');">${manaMax} max Mana</a>'
	},
    'setHarvestBankPlant':{
        'hint':'Choose the plant you are going to harvest/let explode.',
        'display':['No harvesting Bank','Bakeberry Bank','Chocoroot Bank','White Chocoroot Bank','Queenbeet Bank','Duketater Bank','Crumbspore Bank','Doughshroom Bank'],
        'default':0
	},
    'setHarvestBankType':{
        'hint':'Choose a scenario that you want for harvesting to calculate the needed Bank (no effect if no plant was selected above).',
        'display':['No CpS multiplier','Frenzy','Building special','Frenzy + Building special'],
        'default':0,
        'extras':'<a class="option" id="maxSpecials" onclick="updateMaxSpecials(\'maxSpecials\');">${maxSpecials} Building specials</a>'
	},
    'defaultSeason':{
        'hint':'Season to maintain when no others have needed upgrades',
        'display':['Default Season: None','Default Season: Business Day','Default Season: Christmas','Default Season: Easter','Default Season: Halloween',"Default Season: Valentine's Day"],
        'default':0
	},
    'fancyui':{
        'hint':'As these graphics are very slow, enable it here.',
        'display':['No graphic','Textbox only','Wheel only','Full graphics'],
        'default':0
	}	
};

// UI Helper functions
function copyToClipboard(text) {
    Game.promptOn = 1;
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    Game.promptOn = 0;
}

function getBuildingSpread() {
    return Game.ObjectsById.map(function(a) {
        return a.amount;
	}).join('/')
}

function getSpeed(current) {
    var newSpeed = prompt('How many times per second do you want to click? (Current maximum is 250 clicks per second)', current);
    if (typeof(newSpeed) == 'undefined' || newSpeed == null || isNaN(Number(newSpeed)) || Number(newSpeed) < 0 || Number(newSpeed) > 250) {
        newSpeed = current;
	}
    return Number(newSpeed);
}

function updateSpeed(base) {
    var newSpeed = getSpeed(FrozenCookies[base]);
    if (newSpeed != FrozenCookies[base]) {
        FrozenCookies[base] = newSpeed;
        updateLocalStorage();
        StartTimer();
	}
}

function getCpSMultMin(current) {
    var newMin = prompt('What CpS multiplier should trigger Auto Casting (e.g. "7" will trigger when you have full mana and a Frenzy, "1" prevents triggering during a clot, etc.)?', current);
    if (typeof(newMin) == 'undefined' || newMin == null || isNaN(Number(newMin)) || Number(newMin) < 0) {
        newMin = current;
	}
    return Number(newMin);
}

function updateCpSMultMin(base) {
    var newMin = getCpSMultMin(FrozenCookies[base]);
    if (newMin != FrozenCookies[base]) {
        FrozenCookies[base] = newMin;
        updateLocalStorage();
        StartTimer();
	}
}

function getAscendAmount(current) {
    current = 0;
    var newAmount = prompt('How many heavenly chips do you want to auto-ascend at?', current);
    if (typeof(newAmount) == 'undefined' || newAmount == null || isNaN(Number(newAmount)) || Number(newAmount) < 0) {
        newAmount = current;
	}
    return Number(newAmount);
}

function updateAscendAmount(base) {
    var newAmount = getAscendAmount(FrozenCookies[base]);
    if (newAmount != FrozenCookies[base]) {
        FrozenCookies[base] = newAmount;
        updateLocalStorage();
        StartTimer();
	}
}

function getManaMax(current) {
    var newMax = prompt('Set maximum mana: ', current);
    if (typeof(newMax) == 'undefined' || newMax == null || isNaN(Number(newMax)) || Number(newMax < 0)) {
        newMax = current;
	}
    return Number(newMax);
}

function updateManaMax(base) {
    var newMax = getManaMax(FrozenCookies[base]);
    if (newMax != FrozenCookies[base]) {
        FrozenCookies[base] = newMax;
        updateLocalStorage();
        StartTimer();
	}
}

function getMaxSpecials(current) {
    var newSpecials = prompt('Set amount of stacked Building specials for Harvest Bank: ', current);
    if (typeof(newSpecials) == 'undefined' || newSpecials == null || isNaN(Number(newSpecials)) || Number(newSpecials < 0)) {
        newSpecials = current;
	}
    return Number(newSpecials);
}

function updateMaxSpecials(base) {
    var newSpecials = getMaxSpecials(FrozenCookies[base]);
    if (newSpecials != FrozenCookies[base]) {
        FrozenCookies[base] = newSpecials;
        updateLocalStorage();
        StartTimer();
	}
}

function getCursorMax(current) {
    var newMax = prompt('How many Cursors should Autobuy stop at?', current);
    if (typeof(newMax) == 'undefined' || newMax == null || isNaN(Number(newMax)) || Number(newMax < 0)) {
        newMax = current;
	}
    return Number(newMax);
}

function updateCursorMax(base) {
    var newMax = getCursorMax(FrozenCookies[base]);
    if (newMax != FrozenCookies[base]) {
        FrozenCookies[base] = newMax;
        updateLocalStorage();
        StartTimer();
	}
}

function hasBuildingSpecialBuff() {
    for (var i in Game.buffs) {
        if (Game.buffs[i].type && (Game.buffs[i].type.name == 'building buff' || Game.buffs[i].type.name == 'building debuff')) {
            return Game.buffs[i].time;
		}
	}
    return 0;
}

function buildingSpecialBuffValue() {
    for (var i in Game.buffs) {
        if (Game.buffs[i].type && (Game.buffs[i].type.name == 'building buff' || Game.buffs[i].type.name == 'building debuff')) {
            return Game.buffs[i].multCpS;
		}
	}
    return 0;
}

function buffDuration(buffName) {
    var buff = Game.hasBuff(buffName);
    return buff ? buff.time : 0;
}

function nextHC(tg) {
	var futureHC = Math.ceil(Game.HowMuchPrestige(Game.cookiesEarned + Game.cookiesReset));
    var nextHC = Game.HowManyCookiesReset(futureHC)
    var toGo = nextHC - (Game.cookiesEarned + Game.cookiesReset);
    return tg ? toGo : timeDisplay(divCps(toGo, Game.cookiesPs));
}

function setGameFPS() { //ok
	var fps_amounts = ['24', '25', '30', '48', '50', '60', '72', '90', '100', '120', '144', '200', '240', '300'];
	if (parseInt(fps_amounts[FrozenCookies["fpsModifier"]]) != Game.fps) { Game.fps = parseInt(fps_amounts[FrozenCookies["fpsModifier"]]); }
}

function setAutoBulk() { //ok
// only set if in buy-mode and only on start or after setting change
	if ((FrozenCookies.autoBulk == 1) && (Game.buyMode==1) && (Game.buyBulk!=10)) Game.storeBulkButton(3);
	if ((FrozenCookies.autoBulk == 2) && (Game.buyMode==1) && (Game.buyBulk!=100)) Game.storeBulkButton(4);
}

function timeDisplay(seconds) {
    if (seconds === '---' || seconds === 0) {
        return 'Done!';
		} else if (seconds == Number.POSITIVE_INFINITY) {
        return 'Never!'
	}
    seconds = Math.floor(seconds);
    var days, hours, minutes;
    days = Math.floor(seconds / (24 * 60 * 60));
    days = (days > 0) ? Beautify(days) + 'd ' : '';
    seconds %= (24 * 60 * 60);
    hours = Math.floor(seconds / (60 * 60));
    hours = (hours > 0) ? hours + 'h ' : '';
    seconds %= (60 * 60);
    minutes = Math.floor(seconds / 60);
    minutes = (minutes > 0) ? minutes + 'm ' : '';
    seconds %= 60;
    seconds = (seconds > 0) ? seconds + 's' : '';
    return (days + hours + minutes + seconds).trim();
}

function cyclePreference(preferenceName) { //ok
    var preference = FrozenCookies.preferenceValues[preferenceName];
    if (preference) {
        var display = preference.display;
        var current = FrozenCookies[preferenceName];
        var preferenceButton = $('#' + preferenceName + 'Button');
        if (display && display.length > 0 && preferenceButton && preferenceButton.length > 0) {
            var newValue = (current + 1) % display.length;
            preferenceButton[0].innerText = display[newValue];
            FrozenCookies[preferenceName] = newValue;
            updateLocalStorage();
            FrozenCookies.recalculateCaches = true;
            Game.RefreshStore();
            Game.RebuildUpgrades();
            StartTimer();
		}
	}
	updateExtraSettings();
}

function updateExtraSettings() { //ok
	var index;
	index=FrozenCookies.banks.findIndex(function(a){return a.name=='harvest';});
	if (FrozenCookies.setHarvestBankPlant && (index==-1)) FrozenCookies.banks.push(harvestBank()); 
	if (!FrozenCookies.setHarvestBankPlant && (index>=0)) FrozenCookies.banks.splice(index,1);
	
	index=FrozenCookies.banks.findIndex(function(a){return a.name=='edifice';});
	if (((FrozenCookies.autoSpell == 3) || FrozenCookies.holdSEBank) && (index==-1)) FrozenCookies.banks.push(edificeBank());
	if (((FrozenCookies.autoSpell != 3) && !FrozenCookies.holdSEBank) && (index>=0)) FrozenCookies.banks.splice(index,1);
	
	setAutoBulk();		
	setGameFPS();
}

//draws infobox
function drawCircles(t_d, x, y) {
    var maxRadius, heightOffset, i_c, i_tc, t_b, maxWidth, maxHeight, s_t,
	c = $('#backgroundLeftCanvas');
    if (typeof(c.measureText) != "function") {
        return;
	}
    maxRadius = 10 + 10*t_d.reduce(function(sum,item){return (item.overlay) ? sum : sum + 1;},0);
    heightOffset = maxRadius + 5 - (15 * (t_d.length - 1) / 2);
    i_c = 0;
    i_tc = 0;
    t_b = ['rgba(170, 170, 170, 1)','rgba(187, 187, 187, 1)','rgba(204, 204, 204, 1)','rgba(221, 221, 221, 1)','rgba(238, 238, 238, 1)','rgba(255, 255, 255, 1)'];
    var maxText = _.max(t_d.map(function(o) {
        return o.name ? o.name + (o.display ? ': ' + o.display : '') : '';
		}), function(str) {
        return str.length;
	});
    var maxMeasure = c.measureText({
        fontSize: "12px",
        fontFamily: "Arial",
        maxWidth: c.width,
        text: maxText
	});
    maxWidth = maxMeasure.width;
    maxHeight = maxMeasure.height * t_d.length;
    if (FrozenCookies.fancyui%2==1) c.drawRect({
        fillStyle: 'rgba(153, 153, 153, 0.6)',
        x: x + maxRadius * 2 + maxWidth / 2 + 35, y: y + maxRadius + 5,
        width: maxWidth + 20, height: maxHeight + 20
	});
	
    t_d.forEach( function(o_draw) {
        if (o_draw.overlay)
        {
            i_c--;
		}
        else
        { if (FrozenCookies.fancyui > 1) {
            c.drawArc({
                strokeStyle: t_b[i_c%t_b.length],
                strokeWidth: 10,
                x: x + (maxRadius + 5), y:y + maxRadius + 5,
                radius: maxRadius - i_c*10
			});
            c.drawArc({
                strokeStyle: t_b[(i_c+2)%t_b.length],
                strokeWidth: 1,
                x: x + (maxRadius + 5), y:y + maxRadius + 5,
                radius: maxRadius - 5 - (i_c)*10
			});
		}
        }
        if (FrozenCookies.fancyui > 1) {
			c.drawArc({
				strokeStyle: o_draw.c1,
				x: x + (maxRadius + 5), y:y + maxRadius + 5,
				radius: maxRadius - i_c*10,
				strokeWidth: 7,
				start: 0,
				end: (360 * o_draw.f_percent)
			});
		}
        if ((FrozenCookies.fancyui%2==1) && o_draw.name)
        {
            s_t = o_draw.name + (o_draw.display ? ": "+o_draw.display : "");
            c.drawText({
                fontSize: "12px",
                fontFamily: "Arial",
                fillStyle: o_draw.c1,
                x: x + maxRadius * 2 + maxWidth / 2 + 35, y: y + heightOffset+15*i_tc,
                text: s_t
			});
            i_tc++;
		}
        i_c++;
	});
}

//calculates data for infobox, called via Game.DrawBackground;
function updateTimers() {
    var chainPurchase, bankPercent, purchasePercent, bankMax, actualCps, t_draw,
	maxColor, height,
	gc_delay = (probabilitySpan('golden', Game.shimmerTypes.golden.time, 0.5) / Game.shimmerTypes.golden.time) -1,
	gc_max_delay = (probabilitySpan('golden', Game.shimmerTypes.golden.time, 0.99) / Game.shimmerTypes.golden.time) -1,
	gc_min_delay = (probabilitySpan('golden', Game.shimmerTypes.golden.time, 0.01) / Game.shimmerTypes.golden.time) -1,
	clot_delay = buffDuration('Clot') / Game.shimmerTypes.golden.maxTime,
	elder_frenzy_delay = buffDuration('Elder frenzy') / Game.shimmerTypes.golden.maxTime,
	frenzy_delay = buffDuration('Frenzy') / Game.shimmerTypes.golden.maxTime,
	dragon_harvest_delay = buffDuration('Dragon Harvest') / Game.shimmerTypes.golden.maxTime,
	click_frenzy_delay = buffDuration('Click frenzy') / Game.shimmerTypes.golden.maxTime,
	dragonflight_delay = buffDuration('Dragonflight') / Game.shimmerTypes.golden.maxTime,
	cursed_finger_delay = buffDuration('Cursed finger') / Game.shimmerTypes.golden.maxTime,
	building_special_delay = hasBuildingSpecialBuff() / Game.shimmerTypes.golden.maxTime,
	cookie_storm_delay = buffDuration('Cookie storm') / Game.shimmerTypes.golden.maxTime,
	decimal_HC_complete = (Game.HowMuchPrestige(Game.cookiesEarned + Game.cookiesReset)%1),
	bankTotal = bestBankAmount(),
	purchaseTotal = nextPurchase().cost,
	bankCompletion = bankTotal ? (Math.min(Game.cookies, bankTotal)) / bankTotal : 0,
	purchaseCompletion = Game.cookies/(bankTotal + purchaseTotal),
	bankPurchaseCompletion = bankTotal/(bankTotal + purchaseTotal),
	chainTotal = 0,
	chainFinished,
	chainCompletion = 0;
	// strange.. needed further investigation
	//   if (nextChainedPurchase().cost > nextPurchase().cost) {
	//       chainPurchase = nextChainedPurchase().purchase;
	//       chainTotal = upgradePrereqCost(chainPurchase);
	//       chainFinished = chainTotal - (upgradePrereqCost(chainPurchase) - chainPurchase.getPrice());
	//       chainCompletion = (chainFinished + Math.max(Game.cookies - bankTotal, 0)) / (bankTotal + chainTotal);
	//   }
    bankPercent = Math.min(Game.cookies, bankTotal) / (bankTotal + purchaseTotal);
    purchasePercent = purchaseTotal / (purchaseTotal + bankTotal);
    bankMax = bankTotal / (purchaseTotal + bankTotal);
    actualCps = Game.cookiesPs + Game.mouseCps() * FrozenCookies.cookieClickSpeed;
	
    t_draw = [];
	
    if (chainTotal) {
        t_draw.push({
            f_percent: chainCompletion,
            c1: 'rgba(51, 51, 51, 1)',
            name: "Chain Completion Time",
            display: timeDisplay(divCps(Math.max(chainTotal + bankTotal - Game.cookies - chainFinished,0), actualCps))
		});
	}
    if (purchaseTotal > 0) {
        t_draw.push({
            f_percent: purchaseCompletion,
            c1: 'rgba(17, 17, 17, 1)',
            name: "Purchase Completion Time",
            display: timeDisplay(divCps(Math.max(purchaseTotal + bankTotal - Game.cookies,0), actualCps))
		});
	}
    if (bankMax > 0) {
        maxColor = (Game.cookies >= bankTotal) ? 'rgba(252, 212, 0, 1)' : 'rgba(201, 169, 0, 1)';
        t_draw.push({
            f_percent: bankMax,
            name: !FrozenCookies.setHarvestBankPlant ? "Max Bank" : "Harvest Bank",
            display: Beautify(bankTotal),
            c1: maxColor,
            overlay: true
		});
        if (bankPercent > 0 && Game.cookies < bankTotal) {
            t_draw.push({
                f_percent: bankPercent,
                c1: 'rgba(252, 212, 0, 1)',
                name: "Bank Completion",
                display: timeDisplay(divCps(Math.max(bankTotal - Game.cookies,0), actualCps)),
                overlay: true
			});
		}
	}
    if (gc_delay > 0) {
        t_draw.push({
            f_percent: gc_max_delay,
            c1: "rgba(255, 155, 0, 1)",
            name: "Golden Cookie Maximum (99%)",
            display: Game.sayTime((gc_max_delay * Game.shimmerTypes.golden.time))
		});
        t_draw.push({
            f_percent: gc_delay,
            c1: "rgba(255, 195, 0, 1)",
            name: "Golden Cookie Estimate (50%)",
            display: Game.sayTime((gc_delay * Game.shimmerTypes.golden.time)),
            overlay: true
		});
        t_draw.push({
            f_percent: gc_min_delay,
            c1: "rgba(255, 235, 0, 1)",
            name: "Golden Cookie Minimum (1%)",
            display: Game.sayTime((gc_min_delay * Game.shimmerTypes.golden.time)),
            overlay: true
			
		});
	}
    if (clot_delay > 0) {
        t_draw.push({
            f_percent: clot_delay,
            c1: "rgba(193, 98, 3, 1)",
            name: "Clot (x" + Game.buffs['Clot'].multCpS + ") Time",
            display: Game.sayTime(buffDuration('Clot'))
		});
	}
    if (elder_frenzy_delay > 0) {
        t_draw.push({
            f_percent: elder_frenzy_delay,
            c1: "rgba(79, 0, 7, 1)",
            name: "Elder Frenzy (x" + Game.buffs['Elder frenzy'].multCpS + ") Time",
            display: Game.sayTime(buffDuration('Elder frenzy'))
		});
	}
    if (frenzy_delay > 0) {
        t_draw.push({
            f_percent: frenzy_delay,
            c1: "rgba(255, 0, 0, 1)",
            name: "Frenzy (x" + Game.buffs['Frenzy'].multCpS + ") Time",
            display: Game.sayTime(buffDuration('Frenzy'))
		});
	}
    if (dragon_harvest_delay > 0) {
        t_draw.push({
            f_percent: dragon_harvest_delay,
            c1: "rgba(206, 180, 49, 1)",
            name: "Dragon Harvest (x" + Game.buffs['Dragon Harvest'].multCpS + ") Time",
            display: Game.sayTime(buffDuration('Dragon Harvest'))
		});
	}
    if (click_frenzy_delay > 0) {
        t_draw.push({
            f_percent: click_frenzy_delay,
            c1: "rgba(0, 196, 255, 1)",
            name: "Click Frenzy (x" + Game.buffs['Click frenzy'].multClick + ") Time",
            display: Game.sayTime(buffDuration('Click frenzy'))
		});
	}
    if (dragonflight_delay > 0) {
        t_draw.push({
            f_percent: dragonflight_delay,
            c1: "rgba(183, 206, 49, 1)",
            name: "Dragonflight (x" + Game.buffs['Dragonflight'].multClick + ") Time",
            display: Game.sayTime(buffDuration('Dragonflight'))
		});
	}
    if (cursed_finger_delay > 0) {
        t_draw.push({
            f_percent: cursed_finger_delay,
            c1: "rgba(23, 79, 1, 1)",
            name: "Cursed Finger Time",
            display: Game.sayTime(buffDuration('Cursed finger'))
		});
	}
    if (building_special_delay > 0) {
        t_draw.push({
            f_percent: building_special_delay,
            c1: "rgba(0, 196, 255, 1)",
            name: "Building Special (x" + buildingSpecialBuffValue() + ") Time",
            display: Game.sayTime(hasBuildingSpecialBuff())
		});
	}
    if (cookie_storm_delay > 0) {
        t_draw.push({
            f_percent: cookie_storm_delay,
            c1: "rgba(0, 196, 255, 1)",
            name: "Cookie Storm Time",
            display: Game.sayTime(buffDuration('Cookie storm'))
		});
	}
    if (decimal_HC_complete>0) {
        t_draw.push({
            f_percent: decimal_HC_complete,
            c1: "rgba(55, 169, 230, 1)",
            name: "HC Completion",
            display: (Math.round(decimal_HC_complete*10000)/100)+"%"
		});
	}
	
    height = $('#backgroundLeftCanvas').height() - 140;
    drawCircles(t_draw, 20, height);
}

function FCMenu() {
	if (Game.onMenu == 'fc_menu') {
        var currPrestige, resetPrestige, prestigeDifference,
		currHC, resetHC, cps, baseChosen, frenzyChosen, clickStr, buildTable,
		menu = $('#menu').html('')
		.append($('<div>').addClass('section').html('Frozen Cookies v ' + FrozenCookies.version)),
		subsection = $('<div>').addClass('subsection')
		.append($('<div>').addClass('title').html('Autobuy Information')),
		recommendation = nextPurchase(),
		chainRecommendation = nextChainedPurchase(),
		isChained = !((recommendation.id == chainRecommendation.id) && (recommendation.type == chainRecommendation.type)),
		bankLevel = bestBank(chainRecommendation.efficiency), 
		actualCps = Game.cookiesPs + baseClickingCps();
		
        subsection.append($('<div>').addClass('listing').html('<b>Next Purchase:</b> ' + recommendation.purchase.name));
        subsection.append($('<div>').addClass('listing').html('<b>Time till completion:</b> ' + timeDisplay(divCps(Math.max(0,(recommendation.cost + bankLevel.cost - Game.cookies)), actualCps))));
        subsection.append($('<div>').addClass('listing').html('<b>Estimated completion time:</b> ' + timeDisplay(divCps(Math.max(0,(recommendation.cost + bankLevel.cost - Game.cookies)), effectiveCps()))));
        if (isChained) {
			subsection.append($('<div>').addClass('listing').html('<b>Building Chain to:</b> ' + chainRecommendation.purchase.name));
			subsection.append($('<div>').addClass('listing').html('<b>Time till Chain completion:</b> ' + timeDisplay(divCps(Math.max(0,(chainRecommendation.cost + bankLevel.cost - Game.cookies)), actualCps))));
			subsection.append($('<div>').addClass('listing').html('<b>Estimated Chain completion:</b> ' + timeDisplay(divCps(Math.max(0,(chainRecommendation.cost + bankLevel.cost - Game.cookies)), effectiveCps()))));
		}

        subsection.append($('<div>').addClass('listing').html('<b>Cost:</b> ' + Beautify(recommendation.cost) + ' <b>Efficiency:</b> ' + Beautify(recommendation.efficiency)));
        if (isChained) {
        subsection.append($('<div>').addClass('listing').html('<b>Chain Cost:</b> ' + Beautify(chainRecommendation.cost) + ' <b>Efficiency:</b> ' + Beautify(chainRecommendation.efficiency)));
		}
		subsection.append($('<div>').addClass('listing').html('<b>Bank:</b> ' + Beautify(bankLevel.cost) + ' <b>Efficiency:</b> ' + Beautify(bankLevel.efficiency)));
        subsection.append($('<div>').addClass('listing').html('<b>Base &#916; CPS:</b> ' + Beautify(recommendation.base_delta_cps)));
        subsection.append($('<div>').addClass('listing').html('<b>Full &#916; CPS:</b> ' + Beautify(recommendation.delta_cps)));

        menu.append(subsection);
		
        // Golden Cookies
        subsection = $('<div>').addClass('subsection');
        subsection.append($('<div>').addClass('title').html('Golden Cookie Information'));
        
		subsection.append($('<div>').addClass('listing').html('<b>GoldenCookie calc CPS :</b> ' + Beautify(goldenCps())));
		subsection.append($('<div>').addClass('listing').html('<b>GoldenCookie calc Value:</b> ' + Beautify(goldenValue())));
		subsection.append($('<div>').addClass('listing').html('<b>GoldenCookie calc Time</b> ' + Beautify(probabilitySpan('golden', 0, 0.5) / Game.fps)+' seconds'));
        if (FrozenCookies.gcclicks>0)
		{	subsection.append($('<div>').addClass('listing').html('<b>GoldenCookie avg CPS:</b> ' + Beautify((FrozenCookies.gcclicksvalue/FrozenCookies.gcclicks)/((FrozenCookies.gcclickstimer/1000)/FrozenCookies.gcclicks))));
			subsection.append($('<div>').addClass('listing').html('<b>GoldenCookie avg Value:</b> ' + Beautify((FrozenCookies.gcclicksvalue/FrozenCookies.gcclicks))));
			subsection.append($('<div>').addClass('listing').html('<b>GoldenCookie avg Time</b> ' + Beautify(((FrozenCookies.gcclickstimer/1000)/FrozenCookies.gcclicks))+' seconds'));
		}
        subsection.append($('<div>').addClass('listing').html('<b>Lucky Cookie Value:</b> ' + Beautify(gcMult()*Math.min(Game.cookies*0.15,Game.cookiesPs*60*15)+13)));
        subsection.append($('<div>').addClass('listing').html('<b>Cookie Bank Required for Max Lucky:</b> ' + Beautify(FrozenCookies.banks[FrozenCookies.banks.findIndex(function(a){return a.name=='lucky';})].cost)));
        subsection.append($('<div>').addClass('listing').html('<b>Chain Cookie Value:</b> ' + Beautify(calculateChainValue())));
        subsection.append($('<div>').addClass('listing').html('<b>Cookie Bank Required for Max Chain:</b> ' + Beautify(FrozenCookies.banks[FrozenCookies.banks.findIndex(function(a){return a.name=='chain';})].cost)));
        subsection.append($('<div>').addClass('listing').html('<b>Golden Cookie Clicks:</b> ' + Beautify(Game.goldenClicks)));
        subsection.append($('<div>').addClass('listing').html('<b>Missed Golden Cookie Clicks:</b> ' + Beautify(Game.missedGoldenClicks)));
        subsection.append($('<div>').addClass('listing').html('<b>Last Golden Cookie Effect:</b> ' + Game.shimmerTypes.golden.last));
        $.each(FrozenCookies.frenzyTimes, function(rate, time) {
            subsection.append($('<div>').addClass('listing').html('<b>Total Recorded Time at x' + rate + ':</b> ' + timeDisplay(time/1000)));
		});
        menu.append(subsection);
		
        // Heavenly Chips
        subsection = $('<div>').addClass('subsection');
        subsection.append($('<div>').addClass('title').html('Heavenly Chips Information'));
        currPrestige = Game.prestige;
        resetPrestige = Game.HowMuchPrestige(Game.cookiesReset + Game.cookiesEarned + earthShatter(true));
        prestigeDifference = resetPrestige - currPrestige;
        currHC = Game.heavenlyChips;
        resetHC = currHC + prestigeDifference;
        subsection.append($('<div>').addClass('listing').html('<b>HC Now:</b> ' + Beautify(Game.heavenlyChips)));
        subsection.append($('<div>').addClass('listing').html('<b>HC After Reset:</b> ' + Beautify(resetHC)));
        subsection.append($('<div>').addClass('listing').html('<b>Cookies to next HC:</b> ' + Beautify(nextHC(true))));
        subsection.append($('<div>').addClass('listing').html('<b>Estimated time to next HC:</b> ' + nextHC()));
        if (currHC < resetHC) {
            subsection.append($('<div>').addClass('listing').html('<b>Time since last HC:</b> ' + timeDisplay((Date.now() - FrozenCookies.lastHCTime)/1000)));
            if (FrozenCookies.lastHCAmount - 1 >= currHC) {
                subsection.append($('<div>').addClass('listing').html('<b>Time to get last HC:</b> ' + timeDisplay((FrozenCookies.lastHCTime - FrozenCookies.prevLastHCTime)/1000)));
			}
            if (FrozenCookies.maxHCPercent > 0) {
                subsection.append($('<div>').addClass('listing').html('<b>Max HC Gain/hr:</b> ' + Beautify(FrozenCookies.maxHCPercent)));
			}
            subsection.append($('<div>').addClass('listing').html('<b>Average HC Gain/hr:</b> ' + Beautify(60 * 60 * (FrozenCookies.lastHCAmount - currHC)/((FrozenCookies.lastHCTime - Game.startDate)/1000))));
            if (FrozenCookies.lastHCAmount - 1 >= currHC) {
                subsection.append($('<div>').addClass('listing').html('<b>Previous Average HC Gain/hr:</b> ' + Beautify(60 * 60 *(FrozenCookies.lastHCAmount - 1 - currHC)/((FrozenCookies.prevLastHCTime - Game.startDate)/1000))));
			}
		}
        menu.append(subsection);
		
        // Harvesting
		if (FrozenCookies.setHarvestBankPlant){
			subsection = $('<div>').addClass('subsection');
			subsection.append($('<div>').addClass('title').html('Harvesting Information'));
			subsection.append($('<div>').addClass('listing').html('<b>Plant to harvest:</b> ' + FrozenCookies.harvestPlant));
			subsection.append($('<div>').addClass('listing').html('<b>Minutes of CpS:</b> ' + FrozenCookies.harvestMinutes + ' min'));
			subsection.append($('<div>').addClass('listing').html('<b>Max percent of Bank:</b> ' + FrozenCookies.harvestMaxPercent*100 + ' %'));
			subsection.append($('<div>').addClass('listing').html('<b>Single ' + FrozenCookies.harvestPlant + (FrozenCookies.setHarvestBankPlant < 6 ? ' harvesting' : ' exploding') + ':</b> ' + Beautify(Game.unbuffedCps * 60 * FrozenCookies.harvestMinutes * FrozenCookies.harvestFrenzy * FrozenCookies.harvestBuilding / Math.pow(10, FrozenCookies.maxSpecials))));
			subsection.append($('<div>').addClass('listing').html('<b>Full garden ' + (FrozenCookies.setHarvestBankPlant < 6 ? ' harvesting' : ' exploding') + ' (36 plots):</b> ' + Beautify(36 * Game.unbuffedCps * 60 * FrozenCookies.harvestMinutes * FrozenCookies.harvestFrenzy * FrozenCookies.harvestBuilding / Math.pow(10, FrozenCookies.maxSpecials))));
			menu.append(subsection);
		}
		
        // Other Information
        subsection = $('<div>').addClass('subsection');
        subsection.append($('<div>').addClass('title').html('Other Information'));
        cps = Game.unbuffedCps + baseClickingCps(FrozenCookies.cookieClickSpeed * FrozenCookies.autoClick);
        baseChosen = (Game.hasBuff('Frenzy')) ? '' : ' (*)';
        frenzyChosen = (Game.hasBuff('Frenzy')) ? ' (*)' : '';
        clickStr = (FrozenCookies.autoClick) ? ' + Autoclick' : '';
        subsection.append($('<div>').addClass('listing').html('<b>Base CPS' + clickStr + baseChosen + ':</b> ' + Beautify(Game.unbuffedCps + baseClickingCps(FrozenCookies.cookieClickSpeed * FrozenCookies.autoClick))));
        subsection.append($('<div>').addClass('listing').html('<b>Frenzy CPS' + clickStr + frenzyChosen + ':</b> ' + Beautify(7*Game.unbuffedCps + baseClickingCps(FrozenCookies.frenzyClickSpeed * FrozenCookies.autoClick))));
        subsection.append($('<div>').addClass('listing').html('<b>Estimated Effective CPS:</b> ' + Beautify(effectiveCps())));
        if (Game.HasUnlocked('Chocolate egg') && !Game.Has('Chocolate egg')) {
            subsection.append($('<div>').addClass('listing').html('<b>Chocolate Egg Value:</b> ' + Beautify(chocolateEggValue())));
		}
		if (!Game.hasAura('Earth Shatterer')) {
            subsection.append($('<div>').addClass('listing').html('<b>Earth Shatterer:</b> ' + Beautify(earthShatter(true))));
		}
        if (liveWrinklers().length > 0) {
            subsection.append($('<div>').addClass('listing').html('<b>Wrinkler Value:</b> ' + Beautify(wrinklerValue())));
		}
		subsection.append($('<div>').addClass('listing').html('<b>Reindeer calc CPS :</b> ' + Beautify(reindeerCps())));
		subsection.append($('<div>').addClass('listing').html('<b>Reindeer calc Value :</b> ' + Beautify(reindeerValue())));
		subsection.append($('<div>').addClass('listing').html('<b>Reindeer calc Time :</b> ' + Beautify(probabilitySpan('reindeer', 0, 0.5) / Game.fps)+' seconds'));		
        if (FrozenCookies.reindeerclicks>0)
		{	subsection.append($('<div>').addClass('listing').html('<b>Reindeer avg CPS:</b> ' + Beautify((FrozenCookies.reindeerclicksvalue/FrozenCookies.reindeerclicks)/((FrozenCookies.reindeerclickstimer/1000)/FrozenCookies.reindeerclicks))));
			subsection.append($('<div>').addClass('listing').html('<b>Reindeer avg Value:</b> ' + Beautify((FrozenCookies.reindeerclicksvalue/FrozenCookies.reindeerclicks))));
			subsection.append($('<div>').addClass('listing').html('<b>Reindeer avg Time:</b> ' + Beautify(((FrozenCookies.reindeerclickstimer/1000)/FrozenCookies.reindeerclicks))+' seconds'));
		}
		subsection.append($('<div>').addClass('listing').html('<b>BigCookie calc CPS :</b> ' + Beautify(baseClickingCps(FrozenCookies.cookieClickSpeed * FrozenCookies.autoClick))));
		subsection.append($('<div>').addClass('listing').html('<b>BigCookie calc Value:</b> ' + Beautify(Game.computedMouseCps/clickBuffBonus())));
		subsection.append($('<div>').addClass('listing').html('<b>BigCookie calc Time</b> ' + Beautify(FrozenCookies.cookieClickSpeed * FrozenCookies.autoClick)+' clicks/second'));
        if (FrozenCookies.clicks>0)
		{	subsection.append($('<div>').addClass('listing').html('<b>BigCookie avg CPS:</b> ' + Beautify((FrozenCookies.clicksvalue/FrozenCookies.clicks)/((FrozenCookies.clickstimer/1000)/FrozenCookies.clicks))));
			subsection.append($('<div>').addClass('listing').html('<b>BigCookie avg Value:</b> ' + Beautify((FrozenCookies.clicksvalue/FrozenCookies.clicks))));
			subsection.append($('<div>').addClass('listing').html('<b>BigCookie avg Time</b> ' + Beautify(1000/((FrozenCookies.clickstimer)/FrozenCookies.clicks))+' clicks/second'));
		}
        menu.append(subsection);
		
		//Options
        if (FrozenCookies.preferenceValues) {
            subsection = $('<div>').addClass('subsection');
            subsection.append($('<div>').addClass('title').html('Frozen Cookie Controls'));
            _.keys(FrozenCookies.preferenceValues).forEach(function(preference) {
                var listing,
				prefVal = FrozenCookies.preferenceValues[preference],
				hint = prefVal.hint,
				display = prefVal.display,
				extras = prefVal.extras,
				extras2 = prefVal.extras2,
				current = FrozenCookies[preference],
				preferenceButtonId = preference + 'Button';
                if (display && display.length > 0 && display.length > current) {
                    listing = $('<div>').addClass('listing');
                    listing.append($('<a class="option" id="' + preferenceButtonId + '" onclick="cyclePreference(\'' + preference + '\');">' + display[current] + '</a>'));
                    if (hint) {
                        listing.append($('<label>' + hint.replace(/\$\{(.+)\}/g, function(s,id){return FrozenCookies[id];}) + '</label>'));
					}
                    if (extras) {
                        listing.append($(extras.replace(/\$\{(.+)\}/g, function(s,id){return FrozenCookies[id];})));
					}
                    if (extras2) {
                        listing.append($(extras2.replace(/\$\{(.+)\}/g, function(s,id){return FrozenCookies[id];})));
					}
					subsection.append(listing);
				}
			});
            menu.append(subsection);
		}
		
		//Recommondationtable
		subsection = $('<div>').addClass('subsection');
        subsection.append($('<div>').addClass('title').html('Internal Information'));
        buildTable = $('<table id="fcEfficiencyTable"/>').html('<tr><th>Building</th><th>Eff%</th><th>Efficiency</th><th>Cost</th><th>&#916; CPS</th><th>&#916; baseCPS</th></tr>');
        recommendationList().forEach(function(rec) {
            var item    = rec.purchase,
			chainStr = (item.unlocked === 0) ? ' (C)' : '';
            buildTable.append($('<tr><td><b>' + item.name + chainStr + '</b></td><td>' + (Math.floor(rec.efficiencyScore * 10000) / 100).toString() + '%</td><td>' + Beautify(rec.efficiency) + '</td><td>' + Beautify(rec.cost) + '</td><td>' + Beautify(rec.delta_cps) + '</td><td>'+Beautify(rec.base_delta_cps)+'</td></tr>'));
		});
        
		// Table Dividers
        buildTable.append($('<tr><td colspan="5">&nbsp;</td></tr>'));
        buildTable.append($('<tr><td colspan="5">&nbsp;</td></tr>').css('border-top', '2px dashed #999'));
		
		// Bank infos
        FrozenCookies.banks.forEach(function(bank) {
            var deltaCps = Math.min(0,effectiveCps(bank.cost) - effectiveCps(Game.cookies));
            buildTable.append($('<tr><td colspan="2"><b>' + bank.name + (deltaCps === 0 ? ' (*)' : '') + '</b></td><td>' + Beautify(bank.efficiency) + '</td><td>' + Beautify(bank.cost) + '</td><td>' + Beautify(deltaCps) + '</td></tr>'));
		});
		
		// Table Dividers		
		buildTable.append($('<tr><td colspan="5">&nbsp;</td></tr>'));
        buildTable.append($('<tr><td colspan="5">&nbsp;</td></tr>').css('border-top', '2px dashed #999'));
        
		// Other information
		$.each({'Pledging/Appeased' : 0, 'One Mind/Awoken' : 1, 'Displeased' : 2, 'Full Wrath/Angered' : 3}, function(k,v) {
            buildTable.append($('<tr><td colspan="2"><b>' + k + (Game.elderWrath === v ? ' (*)' : '') + '</b></td><td colspan="2" title="Ratio of Effective CPS vs Base CPS">' + Beautify(effectiveCps(Game.cookies, v) / Game.unbuffedCps) + '</td><td>' + Beautify(effectiveCps(Game.cookies, v) - effectiveCps()) + '</td></tr>'));
		});
        subsection.append($('<div>').addClass('listing').append(buildTable));
        menu.append(subsection);
//        FrozenCookies.menutimer=setTimeout(FCMenu,5000);
	}
//	else {
//		clearInterval(FrozenCookies.menutimer);
//        FrozenCookies.menutimer = 0;
//	}
}