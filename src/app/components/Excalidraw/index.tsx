import { Excalidraw } from "@excalidraw/excalidraw";
import AWSLIB from "./lib.json"
import { useState } from "react";
const DrawPane: React.FC = () => {
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);

  const updateScene = () => {
    const sceneData = {
      "elements": [
        {
          "type": "rectangle",
          "version": 932,
          "versionNonce": 1988584471,
          "isDeleted": false,
          "id": "X5tKlo50t4oKYbcRSH6WG",
          "fillStyle": "cross-hatch",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 550.1666666666667,
          "y": 1881.0687891642258,
          "strokeColor": "#000000",
          "backgroundColor": "#7950f288",
          "width": 65.08084106445301,
          "height": 65.08084106445301,
          "seed": 671691689,
          "groupIds": [
            "H-u_bKmVgFVayHlhkc1Fc",
            "I-XK_p9GUhPLxMBQJ_di3",
            "6hkm_B0GerIY2fdCzqk4O",
            "KVl9vdlgaZlsyDPDvPftg",
            "lSrbI3asThsix8Q71-hLm"
          ],
          "roundness": null,
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false
        },
        {
          "type": "line",
          "version": 1051,
          "versionNonce": 589417689,
          "isDeleted": false,
          "id": "OLzlyVNCXtHC6xxnlt9yy",
          "fillStyle": "solid",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 607.9297529509274,
          "y": 1914.3185447608978,
          "strokeColor": "#000000",
          "backgroundColor": "#7950f288",
          "width": 47.85332485429306,
          "height": 12.065067211596558,
          "seed": 521402215,
          "groupIds": [
            "7OV0yGjZeLv0pTux_QaHN",
            "KVl9vdlgaZlsyDPDvPftg",
            "lSrbI3asThsix8Q71-hLm"
          ],
          "roundness": {
            "type": 2
          },
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "startBinding": null,
          "endBinding": null,
          "lastCommittedPoint": null,
          "startArrowhead": null,
          "endArrowhead": null,
          "points": [
            [
              0,
              0
            ],
            [
              -18.5584058933382,
              0.011563484410022973
            ],
            [
              -32.55330621785876,
              -1.9018154390335278
            ],
            [
              -42.35363923211341,
              -6.769249108181582
            ],
            [
              -47.853324854293064,
              -12.053503727186534
            ]
          ]
        },
        {
          "type": "line",
          "version": 1229,
          "versionNonce": 1917897015,
          "isDeleted": false,
          "id": "CpEy5wW0JblX-FOsud_Vc",
          "fillStyle": "solid",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 607.9896057595499,
          "y": 1914.3745078924524,
          "strokeColor": "#000000",
          "backgroundColor": "#7950f288",
          "width": 47.85332485429306,
          "height": 13.099128027499184,
          "seed": 97965705,
          "groupIds": [
            "7OV0yGjZeLv0pTux_QaHN",
            "KVl9vdlgaZlsyDPDvPftg",
            "lSrbI3asThsix8Q71-hLm"
          ],
          "roundness": {
            "type": 2
          },
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "startBinding": null,
          "endBinding": null,
          "lastCommittedPoint": null,
          "startArrowhead": null,
          "endArrowhead": null,
          "points": [
            [
              0,
              0
            ],
            [
              -18.52349323633393,
              0.11906317763421051
            ],
            [
              -32.55330621785876,
              2.0667952227355864
            ],
            [
              -42.35363923211341,
              7.35647183798585
            ],
            [
              -47.853324854293064,
              13.099128027499184
            ]
          ]
        },
        {
          "type": "line",
          "version": 1190,
          "versionNonce": 786745785,
          "isDeleted": false,
          "id": "oseeFpPHZ4uc_WslPcfEO",
          "fillStyle": "solid",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 607.4760483965899,
          "y": 1910.107622141831,
          "strokeColor": "#000000",
          "backgroundColor": "#7950f288",
          "width": 42.517101216575185,
          "height": 12.065067211596558,
          "seed": 143553159,
          "groupIds": [
            "7OV0yGjZeLv0pTux_QaHN",
            "KVl9vdlgaZlsyDPDvPftg",
            "lSrbI3asThsix8Q71-hLm"
          ],
          "roundness": {
            "type": 2
          },
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "startBinding": null,
          "endBinding": null,
          "lastCommittedPoint": null,
          "startArrowhead": null,
          "endArrowhead": null,
          "points": [
            [
              0,
              0
            ],
            [
              -16.48891950951993,
              0.011563484410022973
            ],
            [
              -28.92321943382577,
              -1.9018154390335278
            ],
            [
              -37.63069696003631,
              -6.769249108181582
            ],
            [
              -42.51710121657519,
              -12.053503727186534
            ]
          ]
        },
        {
          "type": "line",
          "version": 1203,
          "versionNonce": 904956503,
          "isDeleted": false,
          "id": "JnI6HN28kdTBAQqD05Y4z",
          "fillStyle": "solid",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 607.6858709765024,
          "y": 1905.433979050287,
          "strokeColor": "#000000",
          "backgroundColor": "#7950f288",
          "width": 37.13227716936171,
          "height": 13.552750366441172,
          "seed": 1672289641,
          "groupIds": [
            "7OV0yGjZeLv0pTux_QaHN",
            "KVl9vdlgaZlsyDPDvPftg",
            "lSrbI3asThsix8Q71-hLm"
          ],
          "roundness": {
            "type": 2
          },
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "startBinding": null,
          "endBinding": null,
          "lastCommittedPoint": null,
          "startArrowhead": null,
          "endArrowhead": null,
          "points": [
            [
              0,
              0
            ],
            [
              -14.766317477563671,
              0.011563484410022973
            ],
            [
              -25.901602611773978,
              -1.9018154390335296
            ],
            [
              -33.699407525949326,
              -6.769249108181577
            ],
            [
              -37.132277169361714,
              -13.541186882031148
            ]
          ]
        },
        {
          "type": "line",
          "version": 1331,
          "versionNonce": 1190472345,
          "isDeleted": false,
          "id": "V9NdlcLX7eXHNyfFq5JXk",
          "fillStyle": "solid",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 608.0592488664633,
          "y": 1919.0185336805018,
          "strokeColor": "#000000",
          "backgroundColor": "#7950f288",
          "width": 42.517101216575185,
          "height": 12.235725271209215,
          "seed": 1330416039,
          "groupIds": [
            "7OV0yGjZeLv0pTux_QaHN",
            "KVl9vdlgaZlsyDPDvPftg",
            "lSrbI3asThsix8Q71-hLm"
          ],
          "roundness": {
            "type": 2
          },
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "startBinding": null,
          "endBinding": null,
          "lastCommittedPoint": null,
          "startArrowhead": null,
          "endArrowhead": null,
          "points": [
            [
              0,
              0
            ],
            [
              -16.488919509519924,
              -0.011727047677183577
            ],
            [
              -28.92321943382577,
              1.928716253332766
            ],
            [
              -37.630696960036296,
              6.864998837344029
            ],
            [
              -42.51710121657519,
              12.223998223532032
            ]
          ]
        },
        {
          "type": "line",
          "version": 1544,
          "versionNonce": 775628663,
          "isDeleted": false,
          "id": "9CFkHPnt1cOcJkdKtD_d8",
          "fillStyle": "solid",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 608.1207904237692,
          "y": 1923.9459561920646,
          "strokeColor": "#000000",
          "backgroundColor": "#7950f288",
          "width": 37.67251676152952,
          "height": 11.944111123659582,
          "seed": 14125129,
          "groupIds": [
            "7OV0yGjZeLv0pTux_QaHN",
            "KVl9vdlgaZlsyDPDvPftg",
            "lSrbI3asThsix8Q71-hLm"
          ],
          "roundness": {
            "type": 2
          },
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "startBinding": null,
          "endBinding": null,
          "lastCommittedPoint": null,
          "startArrowhead": null,
          "endArrowhead": null,
          "points": [
            [
              0,
              0
            ],
            [
              -14.766317477563693,
              -0.010253745758798404
            ],
            [
              -25.901602611773964,
              1.6864062163743208
            ],
            [
              -33.69940752594934,
              6.002529762838099
            ],
            [
              -37.67251676152952,
              11.933857377900782
            ]
          ]
        },
        {
          "type": "text",
          "version": 1256,
          "versionNonce": 1141272441,
          "isDeleted": false,
          "id": "Ez5C0K2ryZ8jmpqeuHu_5",
          "fillStyle": "hachure",
          "strokeWidth": 1,
          "strokeStyle": "solid",
          "roughness": 1,
          "opacity": 100,
          "angle": 0,
          "x": 551.1970869700112,
          "y": 1949.9053859643745,
          "strokeColor": "#000000",
          "backgroundColor": "transparent",
          "width": 63.02000045776367,
          "height": 24,
          "seed": 1081785543,
          "groupIds": [
            "lSrbI3asThsix8Q71-hLm"
          ],
          "roundness": null,
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "fontSize": 20,
          "fontFamily": 1,
          "text": "Kinesis",
          "textAlign": "center",
          "verticalAlign": "top",
          "containerId": null,
          "originalText": "Kinesis",
          "lineHeight": 1.2
        },
        {
          "type": "text",
          "version": 2232,
          "versionNonce": 929560025,
          "isDeleted": false,
          "id": "uD4wUCzCEKJEx5-EFUqLm",
          "fillStyle": "hachure",
          "strokeWidth": 1,
          "strokeStyle": "solid",
          "roughness": 1,
          "opacity": 100,
          "angle": 0,
          "x": 1393.5,
          "y": 1948.978294536915,
          "strokeColor": "#000000",
          "backgroundColor": "transparent",
          "width": 42.36000061035156,
          "height": 24,
          "seed": 765034889,
          "groupIds": [
            "N-UhoG2-i5e6M3CQpZ865"
          ],
          "roundness": null,
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "fontSize": 20,
          "fontFamily": 1,
          "text": "EMR",
          "textAlign": "left",
          "verticalAlign": "top",
          "containerId": null,
          "originalText": "EMR",
          "lineHeight": 1.2
        },
        {
          "type": "rectangle",
          "version": 1717,
          "versionNonce": 1268625463,
          "isDeleted": false,
          "id": "pP1vDBGDGVErINt-oZ1B1",
          "fillStyle": "cross-hatch",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 382.95957946777344,
          "y": 1881.0687891642258,
          "strokeColor": "#000000",
          "backgroundColor": "#7950f288",
          "width": 64.08084106445314,
          "height": 64.08084106445314,
          "seed": 870315911,
          "groupIds": [
            "R_u4cLXkflEd1Zp2wwLkP",
            "FGXW73xC_RnN9n3kAFV8l",
            "vqUNhFNhDEK_xCSRZccD7",
            "N-UhoG2-i5e6M3CQpZ865"
          ],
          "roundness": null,
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false
        },
        {
          "type": "ellipse",
          "version": 622,
          "versionNonce": 176018105,
          "isDeleted": false,
          "id": "EH-ssM0aIrZxbcgnuqHtH",
          "fillStyle": "hachure",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 394.0129732106866,
          "y": 1903.911765089916,
          "strokeColor": "#000000",
          "backgroundColor": "transparent",
          "width": 18.834511221178886,
          "height": 18.834511221178886,
          "seed": 1944217705,
          "groupIds": [
            "pNIgvuHKda5Te9YoBoZwO",
            "vqUNhFNhDEK_xCSRZccD7",
            "N-UhoG2-i5e6M3CQpZ865"
          ],
          "roundness": null,
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false
        },
        {
          "type": "ellipse",
          "version": 611,
          "versionNonce": 1124634967,
          "isDeleted": false,
          "id": "1tHjD8n1WH2ki1TBTfEVQ",
          "fillStyle": "hachure",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 413.9237422159315,
          "y": 1891.5348005731419,
          "strokeColor": "#000000",
          "backgroundColor": "transparent",
          "width": 7.533804488471561,
          "height": 7.533804488471561,
          "seed": 2453159,
          "groupIds": [
            "pNIgvuHKda5Te9YoBoZwO",
            "vqUNhFNhDEK_xCSRZccD7",
            "N-UhoG2-i5e6M3CQpZ865"
          ],
          "roundness": null,
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false
        },
        {
          "type": "ellipse",
          "version": 612,
          "versionNonce": 1015354265,
          "isDeleted": false,
          "id": "jd1YzI7ZIw5jxkl3zeJGd",
          "fillStyle": "hachure",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 428.9913511928771,
          "y": 1900.1448628456794,
          "strokeColor": "#000000",
          "backgroundColor": "transparent",
          "width": 7.533804488471561,
          "height": 7.533804488471561,
          "seed": 304837449,
          "groupIds": [
            "pNIgvuHKda5Te9YoBoZwO",
            "vqUNhFNhDEK_xCSRZccD7",
            "N-UhoG2-i5e6M3CQpZ865"
          ],
          "roundness": null,
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false
        },
        {
          "type": "ellipse",
          "version": 613,
          "versionNonce": 146427511,
          "isDeleted": false,
          "id": "5rgf-mYiw4fEW59CFqQ6Q",
          "fillStyle": "hachure",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 428.9913511928771,
          "y": 1917.9031162827912,
          "strokeColor": "#000000",
          "backgroundColor": "transparent",
          "width": 7.533804488471561,
          "height": 7.533804488471561,
          "seed": 250544583,
          "groupIds": [
            "pNIgvuHKda5Te9YoBoZwO",
            "vqUNhFNhDEK_xCSRZccD7",
            "N-UhoG2-i5e6M3CQpZ865"
          ],
          "roundness": null,
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false
        },
        {
          "type": "ellipse",
          "version": 614,
          "versionNonce": 833697913,
          "isDeleted": false,
          "id": "cBi62nGYCtkDPGPM4-01m",
          "fillStyle": "hachure",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 413.9237422159315,
          "y": 1926.5131785553297,
          "strokeColor": "#000000",
          "backgroundColor": "transparent",
          "width": 7.533804488471561,
          "height": 7.533804488471561,
          "seed": 1557144105,
          "groupIds": [
            "pNIgvuHKda5Te9YoBoZwO",
            "vqUNhFNhDEK_xCSRZccD7",
            "N-UhoG2-i5e6M3CQpZ865"
          ],
          "roundness": null,
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false
        },
        {
          "type": "line",
          "version": 668,
          "versionNonce": 1735878551,
          "isDeleted": false,
          "id": "CsBXCTBPXnHJ26MLtiRdL",
          "fillStyle": "hachure",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 419.8431600283038,
          "y": 1899.068605061612,
          "strokeColor": "#000000",
          "backgroundColor": "transparent",
          "width": 10.224448948639967,
          "height": 19.372640113212565,
          "seed": 827928807,
          "groupIds": [
            "pNIgvuHKda5Te9YoBoZwO",
            "vqUNhFNhDEK_xCSRZccD7",
            "N-UhoG2-i5e6M3CQpZ865"
          ],
          "roundness": {
            "type": 2
          },
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "startBinding": null,
          "endBinding": null,
          "lastCommittedPoint": null,
          "startArrowhead": null,
          "endArrowhead": null,
          "points": [
            [
              0,
              0
            ],
            [
              10.224448948639967,
              19.372640113212565
            ]
          ]
        },
        {
          "type": "line",
          "version": 757,
          "versionNonce": 2076557657,
          "isDeleted": false,
          "id": "s3I0CP2Ots1qNL4pV1tM2",
          "fillStyle": "hachure",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 430.33667342295917,
          "y": 1907.678667334151,
          "strokeColor": "#000000",
          "backgroundColor": "transparent",
          "width": 10.224448948639967,
          "height": 19.372640113212565,
          "seed": 280753417,
          "groupIds": [
            "pNIgvuHKda5Te9YoBoZwO",
            "vqUNhFNhDEK_xCSRZccD7",
            "N-UhoG2-i5e6M3CQpZ865"
          ],
          "roundness": {
            "type": 2
          },
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "startBinding": null,
          "endBinding": null,
          "lastCommittedPoint": null,
          "startArrowhead": null,
          "endArrowhead": null,
          "points": [
            [
              0,
              0
            ],
            [
              -10.224448948639967,
              19.372640113212565
            ]
          ]
        },
        {
          "type": "line",
          "version": 646,
          "versionNonce": 1567906999,
          "isDeleted": false,
          "id": "cjbo4KhXn_rdnaX073HkD",
          "fillStyle": "hachure",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 409.61871107966545,
          "y": 1905.5261517660167,
          "strokeColor": "#000000",
          "backgroundColor": "transparent",
          "width": 5.381288920336828,
          "height": 7.533804488471561,
          "seed": 1626373127,
          "groupIds": [
            "pNIgvuHKda5Te9YoBoZwO",
            "vqUNhFNhDEK_xCSRZccD7",
            "N-UhoG2-i5e6M3CQpZ865"
          ],
          "roundness": {
            "type": 2
          },
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "startBinding": null,
          "endBinding": null,
          "lastCommittedPoint": null,
          "startArrowhead": null,
          "endArrowhead": null,
          "points": [
            [
              0,
              0
            ],
            [
              5.381288920336828,
              -7.533804488471561
            ]
          ]
        },
        {
          "type": "line",
          "version": 642,
          "versionNonce": 672542265,
          "isDeleted": false,
          "id": "-24SQRs6SwnGRsLogg6HK",
          "fillStyle": "hachure",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 6.186711531996999,
          "x": 410.1568399716964,
          "y": 1920.5937607429607,
          "strokeColor": "#000000",
          "backgroundColor": "transparent",
          "width": 4.30503113626946,
          "height": 7.533804488471561,
          "seed": 1097493481,
          "groupIds": [
            "pNIgvuHKda5Te9YoBoZwO",
            "vqUNhFNhDEK_xCSRZccD7",
            "N-UhoG2-i5e6M3CQpZ865"
          ],
          "roundness": {
            "type": 2
          },
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "startBinding": null,
          "endBinding": null,
          "lastCommittedPoint": null,
          "startArrowhead": null,
          "endArrowhead": null,
          "points": [
            [
              0,
              0
            ],
            [
              4.30503113626946,
              7.533804488471561
            ]
          ]
        },
        {
          "type": "line",
          "version": 658,
          "versionNonce": 777366999,
          "isDeleted": false,
          "id": "3pkWDN_4AZ2N0afHpZnfW",
          "fillStyle": "hachure",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 412.3093555398325,
          "y": 1910.3693117943178,
          "strokeColor": "#000000",
          "backgroundColor": "transparent",
          "width": 16.681995653044158,
          "height": 4.843160028303141,
          "seed": 833708839,
          "groupIds": [
            "pNIgvuHKda5Te9YoBoZwO",
            "vqUNhFNhDEK_xCSRZccD7",
            "N-UhoG2-i5e6M3CQpZ865"
          ],
          "roundness": {
            "type": 2
          },
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "startBinding": null,
          "endBinding": null,
          "lastCommittedPoint": null,
          "startArrowhead": null,
          "endArrowhead": null,
          "points": [
            [
              0,
              0
            ],
            [
              16.681995653044158,
              -4.843160028303141
            ]
          ]
        },
        {
          "type": "line",
          "version": 649,
          "versionNonce": 1300627225,
          "isDeleted": false,
          "id": "8JOYXipTx3osRKz5YEmOL",
          "fillStyle": "hachure",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0.04834938665190336,
          "x": 412.847484431863,
          "y": 1916.8268584987238,
          "strokeColor": "#000000",
          "backgroundColor": "transparent",
          "width": 16.681995653044158,
          "height": 4.30503113626946,
          "seed": 115803849,
          "groupIds": [
            "pNIgvuHKda5Te9YoBoZwO",
            "vqUNhFNhDEK_xCSRZccD7",
            "N-UhoG2-i5e6M3CQpZ865"
          ],
          "roundness": {
            "type": 2
          },
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "startBinding": null,
          "endBinding": null,
          "lastCommittedPoint": null,
          "startArrowhead": null,
          "endArrowhead": null,
          "points": [
            [
              0,
              0
            ],
            [
              16.681995653044158,
              4.30503113626946
            ]
          ]
        },
        {
          "type": "line",
          "version": 622,
          "versionNonce": 892328695,
          "isDeleted": false,
          "id": "VWmflJ3fYdlRMuT5ZmpBr",
          "fillStyle": "hachure",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 0,
          "x": 403.6992932672947,
          "y": 1909.2930540102527,
          "strokeColor": "#000000",
          "backgroundColor": "transparent",
          "width": 0,
          "height": 7.533804488471561,
          "seed": 67659335,
          "groupIds": [
            "pNIgvuHKda5Te9YoBoZwO",
            "vqUNhFNhDEK_xCSRZccD7",
            "N-UhoG2-i5e6M3CQpZ865"
          ],
          "roundness": {
            "type": 2
          },
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "startBinding": null,
          "endBinding": null,
          "lastCommittedPoint": null,
          "startArrowhead": null,
          "endArrowhead": null,
          "points": [
            [
              0,
              0
            ],
            [
              0,
              7.533804488471561
            ]
          ]
        },
        {
          "type": "line",
          "version": 703,
          "versionNonce": 1518908409,
          "isDeleted": false,
          "id": "LHC9kHpaUfzYsklojQfc5",
          "fillStyle": "hachure",
          "strokeWidth": 2,
          "strokeStyle": "solid",
          "roughness": 0,
          "opacity": 100,
          "angle": 1.5993599846336561,
          "x": 403.6992932672947,
          "y": 1909.2930540102527,
          "strokeColor": "#000000",
          "backgroundColor": "transparent",
          "width": 0,
          "height": 7.533804488471561,
          "seed": 1808614825,
          "groupIds": [
            "pNIgvuHKda5Te9YoBoZwO",
            "vqUNhFNhDEK_xCSRZccD7",
            "N-UhoG2-i5e6M3CQpZ865"
          ],
          "roundness": {
            "type": 2
          },
          "boundElements": [],
          "updated": 1679483656149,
          "link": null,
          "locked": false,
          "startBinding": null,
          "endBinding": null,
          "lastCommittedPoint": null,
          "startArrowhead": null,
          "endArrowhead": null,
          "points": [
            [
              0,
              0
            ],
            [
              0,
              7.533804488471561
            ]
          ]
        }
      ],
      // appState: {
      //   viewBackgroundColor: "#edf2ff",
      // },
    };
    excalidrawAPI.updateScene(sceneData);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}></h1>
      <button className="custom-button" onClick={updateScene}>
        Update Scene
      </button>
      <div style={{ height: "98vh" }}>
        <Excalidraw
        //@ts-ignore
        ref={(api) => setExcalidrawAPI(api)}
          initialData={
            {
              //@ts-ignore
              libraryItems: [...AWSLIB.libraryItems]
            }
          }
        />
      </div>
    </>
  );
};

export default DrawPane;
