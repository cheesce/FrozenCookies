
var upgradeJson = {
    // Cursor tiered upgrades
    0: {'buildings': [1], 'upgrades': []},
    1: {'buildings': [1], 'upgrades': []},
    2: {'buildings': [10], 'upgrades': []},
    3: {'buildings': [25], 'upgrades': []},
    4: {'buildings': [50], 'upgrades': []},
    5: {'buildings': [100], 'upgrades': []},
    6: {'buildings': [150], 'upgrades': []},
    43: {'buildings': [200], 'upgrades': []},
    82: {'buildings': [250], 'upgrades': []},
    109: {'buildings': [300], 'upgrades': []},
    188: {'buildings': [350], 'upgrades': []},
    189: {'buildings': [400], 'upgrades': []},
	
    // Grandma tiered upgrades
    7: {'buildings': [0,1], 'upgrades': []},
    8: {'buildings': [0,5], 'upgrades': []},
    9: {'buildings': [0,25], 'upgrades': []},
    44: {'buildings': [0,50], 'upgrades': []},
    110: {'buildings': [0,100], 'upgrades': []},
    192: {'buildings': [0,150], 'upgrades': []},
    294: {'buildings': [0,200], 'upgrades': []},
    307: {'buildings': [0,250], 'upgrades': []},
    428: {'buildings': [0,300], 'upgrades': []},
    480: {'buildings': [0,350], 'upgrades': []},
    506: {'buildings': [0,400], 'upgrades': []},
    
    // Farm tiered upgrades
    10: {'buildings': [0,0,1], 'upgrades': []},
    11: {'buildings': [0,0,5], 'upgrades': []},
    12: {'buildings': [0,0,25], 'upgrades': []},
    45: {'buildings': [0,0,50], 'upgrades': []},
    111: {'buildings': [0,0,100], 'upgrades': []},
    193: {'buildings': [0,0,150], 'upgrades': []},
    295: {'buildings': [0,0,200], 'upgrades': []},
    308: {'buildings': [0,0,250], 'upgrades': []},
    429: {'buildings': [0,0,300], 'upgrades': []},
    481: {'buildings': [0,0,350], 'upgrades': []},
    507: {'buildings': [0,0,400], 'upgrades': []},
    
    // Mine tiered upgrades
    16: {'buildings': [0,0,0,1], 'upgrades': []},
    17: {'buildings': [0,0,0,5], 'upgrades': []},
    18: {'buildings': [0,0,0,25], 'upgrades': []},
    47: {'buildings': [0,0,0,50], 'upgrades': []},
    113: {'buildings': [0,0,0,100], 'upgrades': []},
    195: {'buildings': [0,0,0,150], 'upgrades': []},
    296: {'buildings': [0,0,0,200], 'upgrades': []},
    309: {'buildings': [0,0,0,250], 'upgrades': []},
    430: {'buildings': [0,0,0,300], 'upgrades': []},
    482: {'buildings': [0,0,0,350], 'upgrades': []},
    508: {'buildings': [0,0,0,400], 'upgrades': []},
    
    // Factory tiered upgrades
    13: {'buildings': [0,0,0,0,1], 'upgrades': []},
    14: {'buildings': [0,0,0,0,5], 'upgrades': []},
    15: {'buildings': [0,0,0,0,25], 'upgrades': []},
    46: {'buildings': [0,0,0,0,50], 'upgrades': []},
    112: {'buildings': [0,0,0,0,100], 'upgrades': []},
    194: {'buildings': [0,0,0,0,150], 'upgrades': []},
    297: {'buildings': [0,0,0,0,200], 'upgrades': []},
    310: {'buildings': [0,0,0,0,250], 'upgrades': []},
    431: {'buildings': [0,0,0,0,300], 'upgrades': []},
    483: {'buildings': [0,0,0,0,350], 'upgrades': []},
    509: {'buildings': [0,0,0,0,400], 'upgrades': []},
    
    // Bank tiered upgrades
    232: {'buildings': [0,0,0,0,0,1], 'upgrades': []},
    233: {'buildings': [0,0,0,0,0,5], 'upgrades': []},
    234: {'buildings': [0,0,0,0,0,25], 'upgrades': []},
    235: {'buildings': [0,0,0,0,0,50], 'upgrades': []},
    236: {'buildings': [0,0,0,0,0,100], 'upgrades': []},
    237: {'buildings': [0,0,0,0,0,150], 'upgrades': []},
    298: {'buildings': [0,0,0,0,0,200], 'upgrades': []},
    311: {'buildings': [0,0,0,0,0,250], 'upgrades': []},
    432: {'buildings': [0,0,0,0,0,300], 'upgrades': []},
    484: {'buildings': [0,0,0,0,0,350], 'upgrades': []},
    510: {'buildings': [0,0,0,0,0,400], 'upgrades': []},
    
    // Temple tiered upgrades
    238: {'buildings': [0,0,0,0,0,0,1], 'upgrades': []},
    239: {'buildings': [0,0,0,0,0,0,5], 'upgrades': []},
    240: {'buildings': [0,0,0,0,0,0,25], 'upgrades': []},
    241: {'buildings': [0,0,0,0,0,0,50], 'upgrades': []},
    242: {'buildings': [0,0,0,0,0,0,100], 'upgrades': []},
    243: {'buildings': [0,0,0,0,0,0,150], 'upgrades': []},
    299: {'buildings': [0,0,0,0,0,0,200], 'upgrades': []},
    312: {'buildings': [0,0,0,0,0,0,250], 'upgrades': []},
    433: {'buildings': [0,0,0,0,0,0,300], 'upgrades': []},
    485: {'buildings': [0,0,0,0,0,0,350], 'upgrades': []},
    511: {'buildings': [0,0,0,0,0,0,400], 'upgrades': []},
    
    // Wizard Tower tiered upgrades
    244: {'buildings': [0,0,0,0,0,0,0,1], 'upgrades': []},
    245: {'buildings': [0,0,0,0,0,0,0,5], 'upgrades': []},
    246: {'buildings': [0,0,0,0,0,0,0,25], 'upgrades': []},
    247: {'buildings': [0,0,0,0,0,0,0,50], 'upgrades': []},
    248: {'buildings': [0,0,0,0,0,0,0,100], 'upgrades': []},
    249: {'buildings': [0,0,0,0,0,0,0,150], 'upgrades': []},
    300: {'buildings': [0,0,0,0,0,0,0,200], 'upgrades': []},
    313: {'buildings': [0,0,0,0,0,0,0,250], 'upgrades': []},
    434: {'buildings': [0,0,0,0,0,0,0,300], 'upgrades': []},
    486: {'buildings': [0,0,0,0,0,0,0,350], 'upgrades': []},
    512: {'buildings': [0,0,0,0,0,0,0,400], 'upgrades': []},
	
    // Shipment tiered upgrades
    19: {'buildings': [0,0,0,0,0,0,0,0,1], 'upgrades': []},
    20: {'buildings': [0,0,0,0,0,0,0,0,5], 'upgrades': []},
    21: {'buildings': [0,0,0,0,0,0,0,0,25], 'upgrades': []},
    48: {'buildings': [0,0,0,0,0,0,0,0,50], 'upgrades': []},
    114: {'buildings': [0,0,0,0,0,0,0,0,100], 'upgrades': []},
    196: {'buildings': [0,0,0,0,0,0,0,0,150], 'upgrades': []},
    301: {'buildings': [0,0,0,0,0,0,0,0,200], 'upgrades': []},
    314: {'buildings': [0,0,0,0,0,0,0,0,250], 'upgrades': []},
    435: {'buildings': [0,0,0,0,0,0,0,0,300], 'upgrades': []},
    487: {'buildings': [0,0,0,0,0,0,0,0,350], 'upgrades': []},
    513: {'buildings': [0,0,0,0,0,0,0,0,400], 'upgrades': []},
	
    // Alchemy lab tiered upgrades
    22: {'buildings': [0,0,0,0,0,0,0,0,0,1], 'upgrades': []},
    23: {'buildings': [0,0,0,0,0,0,0,0,0,5], 'upgrades': []},
    24: {'buildings': [0,0,0,0,0,0,0,0,0,25], 'upgrades': []},
    49: {'buildings': [0,0,0,0,0,0,0,0,0,50], 'upgrades': []},
    115: {'buildings': [0,0,0,0,0,0,0,0,0,100], 'upgrades': []},
    197: {'buildings': [0,0,0,0,0,0,0,0,0,150], 'upgrades': []},
    302: {'buildings': [0,0,0,0,0,0,0,0,0,200], 'upgrades': []},
    315: {'buildings': [0,0,0,0,0,0,0,0,0,250], 'upgrades': []},
    436: {'buildings': [0,0,0,0,0,0,0,0,0,300], 'upgrades': []},
    488: {'buildings': [0,0,0,0,0,0,0,0,0,350], 'upgrades': []},
    514: {'buildings': [0,0,0,0,0,0,0,0,0,400], 'upgrades': []},
	
    // Portal tiered upgrades
    25: {'buildings': [0,0,0,0,0,0,0,0,0,0,1], 'upgrades': []},
    26: {'buildings': [0,0,0,0,0,0,0,0,0,0,5], 'upgrades': []},
    27: {'buildings': [0,0,0,0,0,0,0,0,0,0,25], 'upgrades': []},
    50: {'buildings': [0,0,0,0,0,0,0,0,0,0,50], 'upgrades': []},
    116: {'buildings': [0,0,0,0,0,0,0,0,0,0,100], 'upgrades': []},
    198: {'buildings': [0,0,0,0,0,0,0,0,0,0,150], 'upgrades': []},
    303: {'buildings': [0,0,0,0,0,0,0,0,0,0,200], 'upgrades': []},
    316: {'buildings': [0,0,0,0,0,0,0,0,0,0,250], 'upgrades': []},
    437: {'buildings': [0,0,0,0,0,0,0,0,0,0,300], 'upgrades': []},
    489: {'buildings': [0,0,0,0,0,0,0,0,0,0,350], 'upgrades': []},
    515: {'buildings': [0,0,0,0,0,0,0,0,0,0,400], 'upgrades': []},
	
    // Time machine tiered upgrades
    28: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,1], 'upgrades': []},
    29: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,5], 'upgrades': []},
    30: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,25], 'upgrades': []},
    51: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,50], 'upgrades': []},
    117: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,100], 'upgrades': []},
    199: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,150], 'upgrades': []},
    304: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,200], 'upgrades': []},
    317: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,250], 'upgrades': []},
    438: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,300], 'upgrades': []},
    490: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,350], 'upgrades': []},
    516: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,400], 'upgrades': []},
	
    // Antimatter condenser tiered upgrades
    99: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,1], 'upgrades': []},
    100: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,5], 'upgrades': []},
    101: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,25], 'upgrades': []},
    102: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,50], 'upgrades': []},
    118: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,100], 'upgrades': []},
    200: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,150], 'upgrades': []},
    305: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,200], 'upgrades': []},
    318: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,250], 'upgrades': []},
    439: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,300], 'upgrades': []},
    491: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,350], 'upgrades': []},
    517: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,400], 'upgrades': []},
	
    // Prism tiered upgrades
    175: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,1], 'upgrades': []},
    176: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,5], 'upgrades': []},
    177: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,25], 'upgrades': []},
    178: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,50], 'upgrades': []},
    179: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,100], 'upgrades': []},
    201: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,150], 'upgrades': []},
    306: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,200], 'upgrades': []},
    319: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,250], 'upgrades': []},
    440: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,300], 'upgrades': []},
    492: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,350], 'upgrades': []},
    518: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,400], 'upgrades': []},
	
    // Chancemaker tiered upgrades
    416: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 'upgrades': []},
    417: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,5], 'upgrades': []},
    418: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,25], 'upgrades': []},
    419: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,50], 'upgrades': []},
    420: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,100], 'upgrades': []},
    421: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,150], 'upgrades': []},
    422: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,200], 'upgrades': []},
    423: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,250], 'upgrades': []},
    441: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,300], 'upgrades': []},
    493: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,350], 'upgrades': []},
    519: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,400], 'upgrades': []},
    
    // Fracale tiered upgrades
    522: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 'upgrades': []},
    523: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5], 'upgrades': []},
    524: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25], 'upgrades': []},
    525: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50], 'upgrades': []},
    526: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100], 'upgrades': []},
    527: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,150], 'upgrades': []},
    528: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,200], 'upgrades': []},
    529: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,250], 'upgrades': []},
    530: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,300], 'upgrades': []},
    531: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,350], 'upgrades': []},
    532: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,400], 'upgrades': []},
    
    // Grandma upgrades
    57: {'buildings': [0,1,15], 'upgrades': []},
    58: {'buildings': [0,1,0,15], 'upgrades': []},
    59: {'buildings': [0,1,0,0,15], 'upgrades': []},
    60: {'buildings': [0,1,0,0,0,15], 'upgrades': []},
    61: {'buildings': [0,1,0,0,0,0,15], 'upgrades': []},
    62: {'buildings': [0,1,0,0,0,0,0,15], 'upgrades': []},
    63: {'buildings': [0,1,0,0,0,0,0,0,15], 'upgrades': []},
    103: {'buildings': [0,1,0,0,0,0,0,0,0,15], 'upgrades': []},
    180: {'buildings': [0,1,0,0,0,0,0,0,0,0,15], 'upgrades': []},
    250: {'buildings': [0,1,0,0,0,0,0,0,0,0,0,15], 'upgrades': []},
    251: {'buildings': [0,1,0,0,0,0,0,0,0,0,0,0,15], 'upgrades': []},
    252: {'buildings': [0,1,0,0,0,0,0,0,0,0,0,0,0,15], 'upgrades': []},
    415: {'buildings': [0,1,0,0,0,0,0,0,0,0,0,0,0,0,15], 'upgrades': []},
    521: {'buildings': [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,15], 'upgrades': []},
    
    // Synergies
    369: {'buildings': [0,0,15,0,0,0,0,0,0,0,0,15,0,0,0,0], 'upgrades': [393]},
    370: {'buildings': [0,0,75,0,0,0,75,0,0,0,0,0,0,0,0,0], 'upgrades': [394]},
    371: {'buildings': [0,0,0,15,0,0,0,15,0,0,0,0,0,0,0,0], 'upgrades': [393]},
    372: {'buildings': [0,0,0,75,0,0,0,0,75,0,0,0,0,0,0,0], 'upgrades': [394]},
    373: {'buildings': [0,0,0,0,15,0,0,0,0,0,0,0,15,0,0,0], 'upgrades': [393]},
    374: {'buildings': [0,0,0,0,75,0,0,0,0,0,0,75,0,0,0,0], 'upgrades': [394]},
    375: {'buildings': [0,0,0,0,0,15,0,0,0,0,15,0,0,0,0,0], 'upgrades': [393]},
    376: {'buildings': [0,0,0,0,75,75,0,0,0,0,0,0,0,0,0,0], 'upgrades': [394]},
    377: {'buildings': [0,0,0,0,0,0,15,0,0,0,15,0,0,0,0,0], 'upgrades': [393]},
    378: {'buildings': [0,0,0,0,0,0,75,0,0,0,0,0,75,0,0,0], 'upgrades': [394]},
    379: {'buildings': [0,0,0,0,0,0,0,15,0,15,0,0,0,0,0,0], 'upgrades': [393]},
    380: {'buildings': [0,0,75,0,0,0,0,75,0,0,0,0,0,0,0,0], 'upgrades': [394]},
    381: {'buildings': [0,0,0,15,0,0,0,0,15,0,0,0,0,0,0,0], 'upgrades': [393]},
    382: {'buildings': [0,0,0,0,75,0,0,0,15,0,0,0,0,0,0,0], 'upgrades': [394]},
    383: {'buildings': [0,0,0,15,0,0,0,0,0,15,0,0,0,0,0,0], 'upgrades': [393]},
    384: {'buildings': [0,0,0,0,0,75,0,0,0,75,0,0,0,0,0,0], 'upgrades': [394]},
    385: {'buildings': [0,0,15,0,0,0,0,0,0,0,15,0,0,0,0,0], 'upgrades': [393]},
    386: {'buildings': [0,0,0,0,0,0,0,0,0,0,75,0,0,75,0,0], 'upgrades': [394]},
    387: {'buildings': [0,0,0,0,0,0,0,0,15,0,0,15,0,0,0,0], 'upgrades': [393]},
    388: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,75,0,75,0,0], 'upgrades': [394]},
    389: {'buildings': [0,0,0,0,0,15,0,0,0,0,0,0,15,0,0,0], 'upgrades': [393]},
    390: {'buildings': [0,0,0,0,0,0,0,0,0,75,0,0,75,0,0,0], 'upgrades': [394]},
    391: {'buildings': [0,0,0,0,0,0,0,15,0,0,0,0,0,15,0,0], 'upgrades': [393]},
    392: {'buildings': [0,0,0,0,0,0,75,0,0,0,0,0,0,75,0,0], 'upgrades': [394]},
    424: {'buildings': [0,0,0,15,0,0,0,0,0,0,0,0,0,0,15,0], 'upgrades': [393]},
    443: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,75,0,75,0], 'upgrades': [394]},
    533: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,15], 'upgrades': [393]},
    534: {'buildings': [75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,75], 'upgrades': [394]},
	
    // Reward cookies
    334: {'buildings': [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100], 'upgrades': []},
    335: {'buildings': [150,150,150,150,150,150,150,150,150,150,150,150,150,150,150,150], 'upgrades': []},
    336: {'buildings': [200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200], 'upgrades': []},
    337: {'buildings': [250,250,250,250,250,250,250,250,250,250,250,250,250,250,250,250], 'upgrades': []},
    400: {'buildings': [300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300], 'upgrades': []},
    477: {'buildings': [350,350,350,350,350,350,350,350,350,350,350,350,350,350,350,350], 'upgrades': []},
    478: {'buildings': [400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400], 'upgrades': []},
    479: {'buildings': [450,450,450,450,450,450,450,450,450,450,450,450,450,450,450,450], 'upgrades': []},
    497: {'buildings': [500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500], 'upgrades': []},
	
    // Grandmapocalypse research
    64: {'buildings': [0,6], 'upgrades': [57,58,59,250,251,252,60]}, //,61,62,63,103,180,415]},
    65: {'buildings': [], 'upgrades': [64]},
    66: {'buildings': [], 'upgrades': [65]},
    67: {'buildings': [], 'upgrades': [66]},
    68: {'buildings': [], 'upgrades': [67]},
    69: {'buildings': [], 'upgrades': [68]},
    70: {'buildings': [], 'upgrades': [69]},
    71: {'buildings': [], 'upgrades': [70]},
    72: {'buildings': [], 'upgrades': [71]},
    73: {'buildings': [], 'upgrades': [72]},
    74: {'buildings': [], 'upgrades': [73]},
    75: {'buildings': [], 'upgrades': [73]},
    84: {'buildings': [], 'upgrades': [74]},
    85: {'buildings': [], 'upgrades': [74]},
    87: {'buildings': [], 'upgrades': [74]},
    
    // Heavenly chips
    130: {'buildings': [], 'upgrades': [129]},
    131: {'buildings': [], 'upgrades': [130]},
    132: {'buildings': [], 'upgrades': [131]},
    133: {'buildings': [], 'upgrades': [132]},
	
    // Season switching
    182: {'buildings': [], 'upgrades': [181]},
    183: {'buildings': [], 'upgrades': [181]},
    184: {'buildings': [], 'upgrades': [181]},
    185: {'buildings': [], 'upgrades': [181]},
    209: {'buildings': [], 'upgrades': [181]},
    
    // Easter season
    210: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    211: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    212: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    213: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    214: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    215: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    216: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    217: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    218: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    219: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    220: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    221: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    222: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    223: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    224: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    225: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    226: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    227: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    228: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
    229: {'buildings': [], 'upgrades': [69,209], 'wrinklers': 1},
	
    // Halloween season
    134: {'buildings': [], 'upgrades': [69,183], 'wrinklers': 1},
    135: {'buildings': [], 'upgrades': [69,183], 'wrinklers': 1},
    136: {'buildings': [], 'upgrades': [69,183], 'wrinklers': 1},
    137: {'buildings': [], 'upgrades': [69,183], 'wrinklers': 1},
    138: {'buildings': [], 'upgrades': [69,183], 'wrinklers': 1},
    139: {'buildings': [], 'upgrades': [69,183], 'wrinklers': 1},
    140: {'buildings': [], 'upgrades': [69,183], 'wrinklers': 1},
	
    // Christmas season
    143: {'buildings': [], 'upgrades': [182]},
    144: {'buildings': [], 'upgrades': [182]},
    145: {'buildings': [], 'upgrades': [182]},
    146: {'buildings': [], 'upgrades': [182]},
    147: {'buildings': [], 'upgrades': [182]},
    148: {'buildings': [], 'upgrades': [182]},
    149: {'buildings': [], 'upgrades': [182]},
	
    // Valentine's Day season
    169: {'buildings': [], 'upgrades': [184]},
    170: {'buildings': [], 'upgrades': [169,184]},
    171: {'buildings': [], 'upgrades': [170,184]},
    172: {'buildings': [], 'upgrades': [171,184]},
    173: {'buildings': [], 'upgrades': [172,184]},
    174: {'buildings': [], 'upgrades': [173,184]},
	
	// A festive hat (starts Santa Upgrades)
	152: {'buildings': [], 'upgrades': [182]},
	
    // A crumbly egg (starts Dragon Upgrades)
	324: {'buildings': [], 'upgrades': [323]}
};

var dragonJson= {
	// Dragon upgrades
    1: {'buildings': [], 'upgrades': [324], 'dragon': 1},	
    2: {'buildings': [], 'upgrades': [324], 'dragon': 2},	
    3: {'buildings': [], 'upgrades': [324], 'dragon': 3},	
    4: {'buildings': [], 'upgrades': [324], 'dragon': 4},	
    5: {'buildings': [], 'upgrades': [324], 'dragon': 5},	
	6: {'buildings': [100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 'upgrades': [324], 'dragon': 6},	
    7: {'buildings': [0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 'upgrades': [324], 'dragon': 7},	
    8: {'buildings': [0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0], 'upgrades': [324], 'dragon': 8},	
    9: {'buildings': [0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0], 'upgrades': [324], 'dragon': 9},	
    10: {'buildings': [0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0], 'upgrades': [324], 'dragon': 10},	
    11: {'buildings': [0,0,0,0,0,100,0,0,0,0,0,0,0,0,0,0], 'upgrades': [324], 'dragon': 11},	
    12: {'buildings': [0,0,0,0,0,0,100,0,0,0,0,0,0,0,0,0], 'upgrades': [324], 'dragon': 12},	
    13: {'buildings': [0,0,0,0,0,0,0,100,0,0,0,0,0,0,0,0], 'upgrades': [324], 'dragon': 13},	
    14: {'buildings': [0,0,0,0,0,0,0,0,100,0,0,0,0,0,0,0], 'upgrades': [324], 'dragon': 14},	
    15: {'buildings': [0,0,0,0,0,0,0,0,0,100,0,0,0,0,0,0], 'upgrades': [324], 'dragon': 15},	
    16: {'buildings': [0,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0], 'upgrades': [324], 'dragon': 16},	
    17: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,100,0,0,0,0], 'upgrades': [324], 'dragon': 17},	
    18: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,100,0,0,0], 'upgrades': [324], 'dragon': 18},	
    19: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,100,0,0], 'upgrades': [324], 'dragon': 19},	
    20: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,100,0], 'upgrades': [324], 'dragon': 20},	
    21: {'buildings': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100], 'upgrades': [324], 'dragon': 21},
    22: {'buildings': [50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50], 'upgrades': [324], 'dragon': 22},	
    23: {'buildings': [200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200], 'upgrades': [324], 'dragon': 23}	
};

var santaJson = {
	// Santa upgrades
    153: {'buildings': [], 'upgrades': [152], 'santa': 1},
    154: {'buildings': [], 'upgrades': [152], 'santa': 2},
    155: {'buildings': [], 'upgrades': [152], 'santa': 3},
    156: {'buildings': [], 'upgrades': [152], 'santa': 4},
    157: {'buildings': [], 'upgrades': [152], 'santa': 5},
    158: {'buildings': [], 'upgrades': [152], 'santa': 6},
    159: {'buildings': [], 'upgrades': [152], 'santa': 7},
    160: {'buildings': [], 'upgrades': [152], 'santa': 8},
    161: {'buildings': [], 'upgrades': [152], 'santa': 9},
    162: {'buildings': [], 'upgrades': [152], 'santa': 10},
    163: {'buildings': [], 'upgrades': [152], 'santa': 11},
    164: {'buildings': [], 'upgrades': [152], 'santa': 12},
    165: {'buildings': [], 'upgrades': [152], 'santa': 13},
    166: {'buildings': [], 'upgrades': [152], 'santa': 14},
    168: {'buildings': [], 'upgrades': [152], 'santa': 15}
};

var blacklist = [
    {   // no blacklist
        'upgrades': [],
        'buildings': []
	},
    {   // Speedrun Blacklist
        'upgrades': [129,130,131,132,133],
        'buildings': []
	},
    {   // Hardcore Blacklist
        'upgrades': true,
        'buildings': []
	},
    {   // Grandmapocalypse Mode 
        'upgrades': [71, 72, 73, 74, 84, 85],
        'buildings': []
	},
    {    // No Buildings
        'upgrades': [],
        'buildings': true
	}
];

var seasons = ['','fools','christmas','easter','halloween','valentines'];

var holidayCookies = {
    halloween: [134,135,136,137,138,139,140],
    christmas: [143,144,145,146,147,148,149],
    valentines: [169,170,171,172,173,174],
    easter: [210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229],
}

//this is the output of probs.html. Has to be copied here.
// First part is without dragon auras (no flight an no harvest), second with one aura(harvest or fligt) , and third with both (harvest and flight)
// first odds is grandmas appeased, then awoken, displeased and angered
var cookieInfo=
[{'clot': {odds: [0, 0.07538313100985361, 0.15534284411494875, 0.23963294174775224]},
'lucky': {odds: [0.43469488898182573, 0.3209409066579634, 0.25088077551640725, 0.23963294174775224]},
'ruin': {odds: [0, 0.07538313100985361, 0.1553428441149577, 0.23963294174775224]},
'blood': {odds: [0, 0.018982810314797996, 0.039285775561241514, 0.06064060911475488]},
'chain': {odds: [0.009072705027734627, 0.024096039277783147, 0.04327159632405853, 0.06514474643323541]},
'storm': {odds: [0.009072705027734627, 0.024096039277783147, 0.04327159632405853, 0.06514474643323541]},
'cfrenzy': {odds: [0.03233806392752929, 0.024645131251385333, 0.020409686351490226, 0.020491234570328865]},
'finger': {odds: [0, 0.006099695958115394, 0.012631396376767254, 0.019498680404002936]},
'building': {odds: [0.07994355225870599, 0.060766426374066436, 0.05008301853126878, 0.05006471471653854]},
'sugar': {odds: [0.00015016295907212268, 0.00011463310731387806, 0.00009522571868595588, 0.00009587489296440729]},
'blab': {odds: [0.000033032835572122776, 0.00002534237030650861, 0.00002084667849697033, 0.000020568191683181955]},
'frenzy': {odds: [0.4346948889818256, 0.25847920176081446, 0.11011584708633768, 0]}},

{'clot': {odds: [0, 0.07512358615863261, 0.15422525152748226, 0.23723802279440453]},
'lucky': {odds: [0.41453441051458406, 0.3134910986966872, 0.24971265646859414, 0.23723802279440453]},
'ruin': {odds: [0, 0.07512358615863261, 0.15422525152748906, 0.23723802279440453]},
'blood': {odds: [0, 0.018954212731723596, 0.03905982968250383, 0.060120546737196585]},
'chain': {odds: [0.008752798346029392, 0.024132298046544123, 0.04312432999748324, 0.06458429595822088]},
'storm': {odds: [0.008752798346029392, 0.024132298046544123, 0.04312432999748324, 0.06458429595822088]},
'cfrenzy': {odds: [0.03118445401905997, 0.02431346849587011, 0.02040953441475977, 0.020320205463347955]},
'finger': {odds: [0, 0.006092358073438478, 0.012561733364001286, 0.019336041742581626]},
'building': {odds: [0.07702105749931139, 0.05989821472471642, 0.050060895530428556, 0.04963847646147962]},
'sugar': {odds: [0.00014489149770242633, 0.00011315191406994232, 0.00009525185992596557, 0.00009508520370481071]},
'harvest': {odds: [0.04504362793615032, 0.029298745528710476, 0.01692060861754674, 0.009586700554848811]},
'blab': {odds: [0.00003155132654925174, 0.000024735759267082687, 0.000020659003316284408, 0.000020283537186258253]},
'frenzy': {odds: [0.41453441051458406, 0.24970010102646825, 0.10825535301897327, 0]}},

{'clot': {odds: [0, 0.07477631543107612, 0.15305591798806623, 0.23488388742013938]},
'lucky': {odds: [0.3958168321039664, 0.30562911478225124, 0.2477082982804809, 0.23488388742013935]},
'ruin': {odds: [0, 0.07477631543107612, 0.15305591798807014, 0.23488388742013935]},
'blood': {odds: [0, 0.018901125847655072, 0.0388193568009904, 0.059608202820186536]},
'chain': {odds: [0.008451288348743792, 0.024100380143704508, 0.0429338380335446, 0.06403218438220738]},
'storm': {odds: [0.008451288348743792, 0.024100380143704508, 0.0429338380335446, 0.06403218438220738]},
'cfrenzy': {odds: [0.0300977201118411, 0.023928132150553026, 0.020342854735545896, 0.020151660879660603]},
'finger': {odds: [0, 0.006077051713295354, 0.01248733832397043, 0.019175764519924643]},
'building': {odds: [0.07427091839898238, 0.058901775813043615, 0.0498754690975094, 0.0492185274417278]},
'sugar': {odds: [0.00013992226191359629, 0.0001114161084842083, 0.00009496764762461947, 0.00009430686954879175]},
'harvest': {odds: [0.043462488880098474, 0.028710268456961688, 0.016877129519925385, 0.00950774282666568]},
'flight': {odds: [0.043462488880098474, 0.028710268456961688, 0.016877129519925385, 0.00950774282666568]},
'blab': {odds: [0.000030220561645471445, 0.000024139070311566174, 0.000020441925767975496, 0.000020020790787698343]},
'frenzy': {odds: [0.39581683210396634, 0.24089760684346803, 0.10593484037065604, 0]}}
];
