import { Event } from '@/interface/event';
import { Locale, EventType, UnitCode } from '@/plugins/utils/enums';
import { EventBanner, EventTypeColor } from '~/static/const';

import EVENT_0001 from "./EVENT-0001";
import EVENT_0001_RETURN from "./EVENT-0001-RETURN";
import EVENT_0002 from "./EVENT-0002";
import EVENT_0003 from "./EVENT-0003";
import EVENT_0003_RETURN from "./EVENT-0003-RETURN";
import EVENT_0005 from "./EVENT-0005";
import EVENT_0006 from "./EVENT-0006";
import EVENT_0006_CHALLENGE from "./EVENT-0006-CHALLENGE";
import EVENT_0007 from "./EVENT-0007";
import EVENT_0008 from "./EVENT-0008";
import EVENT_0009 from "./EVENT-0009";
import EVENT_0010 from "./EVENT-0010";
import EVENT_0011 from "./EVENT-0011";
import EVENT_0012 from "./EVENT-0012";
import EVENT_0013 from "./EVENT-0013";
import EVENT_0014 from "./EVENT-0014";
import EVENT_0015 from "./EVENT-0015";
import EVENT_0016 from "./EVENT-0016";
import EVENT_0017 from "./EVENT-0017";
import EVENT_0018 from "./EVENT-0018";
import EVENT_0019 from "./EVENT-0019";
import EVENT_0021 from "./EVENT-0021";
import EVENT_0022 from "./EVENT-0022";
import EVENT_0023 from "./EVENT-0023";
import EVENT_0024 from "./EVENT-0024";
import EVENT_0025 from "./EVENT-0025";
import EVENT_0026 from "./EVENT-0026";
import EVENT_0027 from "./EVENT-0027";
import EVENT_0028 from "./EVENT-0028";
import EVENT_0029 from "./EVENT-0029";
import EVENT_0030 from "./EVENT-0030";
import EVENT_0031 from "./EVENT-0031";
import EVENT_0033 from "./EVENT-0033";
import EVENT_0034 from "./EVENT-0034";
import EVENT_0035 from "./EVENT-0035";
import EVENT_0036 from "./EVENT-0036";
import EVENT_0037 from "./EVENT-0037";
import EVENT_0038 from "./EVENT-0038";
import EVENT_0039 from "./EVENT-0039";
import EVENT_0040 from "./EVENT-0040";
import EVENT_0042 from "./EVENT-0042";
import EVENT_0043 from "./EVENT-0043";
import EVENT_0044 from "./EVENT-0044";
import EVENT_0045 from "./EVENT-0045";
import EVENT_0046 from "./EVENT-0046";
import EVENT_0047 from "./EVENT-0047";
import EVENT_0048 from "./EVENT-0048";
import EVENT_0049 from "./EVENT-0049";
import EVENT_0050 from "./EVENT-0050";
import EVENT_0051 from "./EVENT-0051";
import EVENT_0052 from "./EVENT-0052";
import EVENT_0053 from "./EVENT-0053";
import EVENT_0054 from "./EVENT-0054";
import EVENT_0055 from "./EVENT-0055";
import EVENT_0056 from "./EVENT-0056";
import EVENT_0057 from "./EVENT-0057";
import EVENT_0058 from "./EVENT-0058";
import EVENT_0059 from "./EVENT-0059";
import EVENT_0060 from "./EVENT-0060";
import EVENT_0061 from "./EVENT-0061";
import EVENT_0062 from "./EVENT-0062";
import EVENT_0063 from "./EVENT-0063";
import EVENT_0064 from "./EVENT-0064";
import EVENT_0065 from "./EVENT-0065";
import EVENT_0066 from "./EVENT-0066";
import EVENT_0067 from "./EVENT-0067";
import EVENT_0068 from "./EVENT-0068";
import EVENT_0069 from "./EVENT-0069";
import EVENT_0070 from "./EVENT-0070";
import EVENT_0071 from "./EVENT-0071";
import EVENT_0072 from "./EVENT-0072";
import EVENT_0073 from "./EVENT-0073";
import EVENT_0074 from "./EVENT-0074";
import EVENT_0075 from "./EVENT-0075";
import EVENT_0076 from "./EVENT-0076";
import EVENT_0077 from "./EVENT-0077";
import EVENT_0078 from "./EVENT-0078";
import EVENT_0079 from "./EVENT-0079";
import EVENT_0080 from "./EVENT-0080";
import EVENT_0081 from "./EVENT-0081";
import EVENT_0082 from "./EVENT-0082";
import EVENT_0083 from "./EVENT-0083";
import EVENT_0084 from "./EVENT-0084";
import EVENT_0085 from "./EVENT-0085";
import EVENT_0086 from "./EVENT-0086";
import EVENT_0087 from "./EVENT-0087";
import EVENT_0088 from "./EVENT-0088";
import EVENT_0089 from "./EVENT-0089";
import EVENT_0090 from "./EVENT-0090";
import EVENT_0091 from "./EVENT-0091";
import EVENT_0092 from "./EVENT-0092";
import EVENT_0093 from "./EVENT-0093";
import EVENT_0094 from "./EVENT-0094";
import EVENT_0095 from "./EVENT-0095";
import EVENT_0096 from "./EVENT-0096";
import EVENT_0097 from "./EVENT-0097";
import EVENT_0098 from "./EVENT-0098";
import EVENT_0099 from "./EVENT-0099";
import EVENT_0100 from "./EVENT-0100";
import EVENT_0101 from "./EVENT-0101";
import EVENT_0102 from "./EVENT-0102";
import EVENT_0103 from "./EVENT-0103";
import EVENT_0104 from "./EVENT-0104";
import EVENT_0105 from "./EVENT-0105";
import EVENT_0106 from "./EVENT-0106";
import EVENT_0107 from "./EVENT-0107";
import EVENT_0108 from "./EVENT-0108";
import EVENT_0109 from "./EVENT-0109";
import EVENT_0110 from "./EVENT-0110";
import EVENT_0111 from "./EVENT-0111";
import EVENT_0112 from "./EVENT-0112";
import EVENT_0113 from "./EVENT-0113";
import EVENT_0114 from "./EVENT-0114";
import EVENT_0115 from "./EVENT-0115";
import EVENT_0116 from "./EVENT-0116";
import EVENT_0117 from "./EVENT-0117";
import EVENT_0118 from "./EVENT-0118";
import EVENT_0119 from "./EVENT-0119";
import EVENT_0120 from "./EVENT-0120";
import EVENT_0121 from "./EVENT-0121";
import EVENT_0122 from "./EVENT-0122";
import EVENT_0123 from "./EVENT-0123";
import EVENT_0124 from "./EVENT-0124";
import EVENT_0125 from "./EVENT-0125";
import EVENT_0126 from "./EVENT-0126";
import EVENT_0127 from "./EVENT-0127";
import EVENT_0128 from "./EVENT-0128";
import EVENT_0129 from "./EVENT-0129";
import EVENT_0130 from "./EVENT-0130";
import EVENT_0131 from "./EVENT-0131";
import EVENT_0132 from "./EVENT-0132";
import EVENT_0133 from "./EVENT-0133";
import EVENT_0134 from "./EVENT-0134";
import EVENT_0135 from "./EVENT-0135";
import EVENT_0136 from "./EVENT-0136";
import EVENT_0137 from "./EVENT-0137";
import EVENT_0138 from "./EVENT-0138";
import EVENT_0139 from "./EVENT-0139";
import EVENT_0140 from "./EVENT-0140";
import EVENT_0141 from "./EVENT-0141";
import EVENT_0142 from "./EVENT-0142";
import EVENT_0143 from "./EVENT-0143";
import EVENT_0144 from "./EVENT-0144";
import EVENT_0145 from "./EVENT-0145";
import EVENT_0146 from "./EVENT-0146";
import EVENT_0147 from "./EVENT-0147";
import EVENT_0148 from "./EVENT-0148";
import EVENT_0149 from "./EVENT-0149";
import EVENT_0150 from "./EVENT-0150";
import EVENT_0151 from "./EVENT-0151";
import EVENT_0152 from "./EVENT-0152";
import EVENT_0153 from "./EVENT-0153";
import EVENT_0154 from "./EVENT-0154";
import EVENT_0155 from "./EVENT-0155";
import EVENT_0156 from "./EVENT-0156";
import EVENT_0157 from "./EVENT-0157";
import EVENT_0158 from "./EVENT-0158";
import EVENT_0159 from "./EVENT-0159";
import EVENT_0160 from "./EVENT-0160";
import EVENT_0161 from "./EVENT-0161";
import EVENT_0162 from "./EVENT-0162";
import EVENT_0163 from "./EVENT-0163";
import EVENT_0164 from "./EVENT-0164";
import EVENT_0165 from "./EVENT-0165";
import EVENT_0166 from "./EVENT-0166";
import EVENT_0167 from "./EVENT-0167";
import EVENT_0168 from "./EVENT-0168";
import EVENT_0169 from "./EVENT-0169";
import EVENT_0170 from "./EVENT-0170";
import EVENT_0171 from "./EVENT-0171";
import EVENT_0173 from "./EVENT-0173";
import EVENT_0174 from "./EVENT-0174";
import EVENT_0175 from "./EVENT-0175";
import EVENT_0176 from "./EVENT-0176";
import EVENT_0177 from "./EVENT-0177";
import EVENT_0178 from "./EVENT-0178";
import EVENT_0179 from "./EVENT-0179";
import EVENT_0180 from "./EVENT-0180";
import EVENT_0181 from "./EVENT-0181";
import EVENT_0182 from "./EVENT-0182";
import EVENT_0183 from "./EVENT-0183";
import EVENT_0184 from "./EVENT-0184";
import EVENT_0185 from "./EVENT-0185";
import EVENT_0186 from "./EVENT-0186";
import EVENT_0187 from "./EVENT-0187";
import EVENT_0188 from "./EVENT-0188";
import EVENT_0189 from "./EVENT-0189";
import EVENT_0190 from "./EVENT-0190";
import EVENT_0191 from "./EVENT-0191";
import EVENT_0192 from "./EVENT-0192";
import EVENT_0193 from "./EVENT-0193";
import EVENT_0194 from "./EVENT-0194";
import EVENT_0195 from "./EVENT-0195";
import EVENT_0196 from "./EVENT-0196";
import EVENT_0197 from "./EVENT-0197";
import EVENT_0198 from "./EVENT-0198";
import EVENT_0199 from "./EVENT-0199";

import EVENT_TIMERIFT_001 from "./EVENT-TIMERIFT-001";
import EVENT_TIMERIFT_002 from "./EVENT-TIMERIFT-002";
import EVENT_TIMERIFT_003 from "./EVENT-TIMERIFT-003";
import EVENT_TIMERIFT_004 from "./EVENT-TIMERIFT-004";
import EVENT_TIMERIFT_005 from "./EVENT-TIMERIFT-005";
import EVENT_TIMERIFT_006 from "./EVENT-TIMERIFT-006";
import EVENT_TIMERIFT_007 from "./EVENT-TIMERIFT-007";
import EVENT_TIMERIFT_008 from "./EVENT-TIMERIFT-008";
import EVENT_TIMERIFT_009 from "./EVENT-TIMERIFT-009";
import EVENT_TIMERIFT_010 from "./EVENT-TIMERIFT-010";
import EVENT_TIMERIFT_011 from "./EVENT-TIMERIFT-011";
import EVENT_TIMERIFT_012 from "./EVENT-TIMERIFT-012";
import EVENT_TIMERIFT_013 from "./EVENT-TIMERIFT-013";
import EVENT_TIMERIFT_014 from "./EVENT-TIMERIFT-014";
import EVENT_TIMERIFT_015 from "./EVENT-TIMERIFT-015";
import EVENT_TIMERIFT_016 from "./EVENT-TIMERIFT-016";
import EVENT_TIMERIFT_017 from "./EVENT-TIMERIFT-017";
import EVENT_TIMERIFT_018 from "./EVENT-TIMERIFT-018";
import EVENT_TIMERIFT_019 from "./EVENT-TIMERIFT-019";
import EVENT_TIMERIFT_020 from "./EVENT-TIMERIFT-020";
import EVENT_TIMERIFT_021 from "./EVENT-TIMERIFT-021";
import EVENT_TIMERIFT_022 from "./EVENT-TIMERIFT-022";

const events: Event[][] = [
    [ EVENT_0199 ],
    [ EVENT_0197, EVENT_0198, EVENT_0196 ],
    [ EVENT_0194, EVENT_0195 ],
    [ EVENT_0191, EVENT_0192, EVENT_0193 ],
    [ EVENT_0190 ],
    [ EVENT_0188, EVENT_0189, EVENT_TIMERIFT_022 ],
    [ EVENT_0187 ],
    [ EVENT_0184, EVENT_0185, EVENT_0186 ],
    [ EVENT_0183 ],
    [ EVENT_0182 ],
    [ EVENT_0180, EVENT_0181 ],
    [ EVENT_0178, EVENT_0179, EVENT_TIMERIFT_021 ],
    [ EVENT_0177 ],
    [ EVENT_0176 ],
    [ EVENT_0174, EVENT_0175 ],
    [ EVENT_0173 ],
    [ EVENT_0170, EVENT_0171 ],
    [ EVENT_0167, EVENT_0168, EVENT_TIMERIFT_020, EVENT_0169 ],
    [ EVENT_0164, EVENT_0165, EVENT_0166 ],
    [ EVENT_0162, EVENT_0163 ],
    [ EVENT_0160, EVENT_0161, EVENT_TIMERIFT_019 ],
    [ EVENT_0158, EVENT_0159 ],
    [ EVENT_0156, EVENT_0157 ],
    [ EVENT_0155 ],
    [ EVENT_TIMERIFT_018 ],
    [ EVENT_0153, EVENT_0154 ],
    [ EVENT_0151, EVENT_0152 ],
    [ EVENT_0150 ],
    [ EVENT_0148, EVENT_0149 ],
    [ EVENT_0146, EVENT_0147 ],
    [ EVENT_0144, EVENT_0145, EVENT_TIMERIFT_017 ],
    [ EVENT_0143 ],
    [ EVENT_0141, EVENT_0142 ],
    [ EVENT_0140 ],
    [ EVENT_0138, EVENT_0139, EVENT_TIMERIFT_016 ],
    [ EVENT_0136, EVENT_0137 ],
    [ EVENT_0134, EVENT_0135 ],
    [ EVENT_0132, EVENT_0133 ],
    [ EVENT_TIMERIFT_015 ],
    [ EVENT_0130, EVENT_0131 ],
    [ EVENT_0127, EVENT_0128, EVENT_0129 ],
    [ EVENT_0126 ],
    [ EVENT_TIMERIFT_014 ],
    [ EVENT_0124, EVENT_0125 ],
    [ EVENT_0123 ],
    [ EVENT_0119, EVENT_0120, EVENT_0121, EVENT_0122 ],
    [ EVENT_0117, EVENT_0118 ],
    [ EVENT_TIMERIFT_013 ],
    [ EVENT_0116 ],
    [ EVENT_0115, EVENT_0114 ],
    [ EVENT_0112, EVENT_0113 ],
    [ EVENT_0111, EVENT_TIMERIFT_012 ],
    [ EVENT_0109, EVENT_0110 ],
    [ EVENT_0107 ],
    [ EVENT_0108 ],
    [ EVENT_0105, EVENT_0106 ],
    [ EVENT_0103, EVENT_0104 ],
    [ EVENT_TIMERIFT_011 ],
    [ EVENT_0101, EVENT_0102 ],
    [ EVENT_0100 ],
    [ EVENT_0097, EVENT_0098, EVENT_0099 ],
    [ EVENT_0096 ],
    [ EVENT_0094, EVENT_0095 ],
    [ EVENT_0093, EVENT_TIMERIFT_010 ],
    [ EVENT_0091, EVENT_0092 ],
    [ EVENT_0088, EVENT_0089, EVENT_0090 ],
    [ EVENT_0086, EVENT_0087 ],
    [ EVENT_0084, EVENT_0085 ],
    [ EVENT_0082, EVENT_0083, EVENT_TIMERIFT_009 ],
    [ EVENT_0081 ],
    [ EVENT_0079, EVENT_0080 ],
    [ EVENT_0078 ],
    [ EVENT_0076, EVENT_0077 ],
    [ EVENT_0074, EVENT_0075 ],
    [ EVENT_TIMERIFT_008 ],
    [ EVENT_0072, EVENT_0073 ],
    [ EVENT_0070, EVENT_0071 ],
    [ EVENT_0069 ],
    [ EVENT_0068 ],
    [ EVENT_0067 ],
    [ EVENT_0065, EVENT_0066 ],
    [ EVENT_TIMERIFT_007 ],
    [ EVENT_0064 ],
    [ EVENT_0061, EVENT_0062, EVENT_0063 ],
    [ EVENT_0060 ],
    [ EVENT_0059 ],
    [ EVENT_0057, EVENT_0058 ],
    [ EVENT_0056 ],
    [ EVENT_0054, EVENT_0055, EVENT_TIMERIFT_006 ],
    [ EVENT_0053 ],
    [ EVENT_0052 ],
    [ EVENT_0050, EVENT_0051 ],
    [ EVENT_TIMERIFT_005 ],
    [ EVENT_0049 ],
    [ EVENT_0048 ],
    [ EVENT_0046, EVENT_0047 ],
    [ EVENT_0045 ],
    [ EVENT_0043, EVENT_0044 ],
    [ EVENT_TIMERIFT_004 ],
    [ EVENT_0042 ],
    [ EVENT_0039, EVENT_0040 ],
    [ EVENT_0037, EVENT_0038, EVENT_0036 ],
    [ EVENT_0001_RETURN, EVENT_0003_RETURN ],
    [ EVENT_TIMERIFT_003 ],
    [ EVENT_0034, EVENT_0035 ],
    [ EVENT_0033 ],
    [ EVENT_0031 ],
    [ EVENT_0029, EVENT_0030 ],
    [ EVENT_0028, EVENT_TIMERIFT_002 ],
    [ EVENT_0027 ],
    [ EVENT_0026 ],
    [ EVENT_0024, EVENT_0025 ],
    [ EVENT_0023 ],
    [ EVENT_0021, EVENT_0022 ],
    [ EVENT_TIMERIFT_001 ],
    [ EVENT_0019 ],
    [ EVENT_0018 ],
    [ EVENT_0015, EVENT_0016, EVENT_0017 ],
    [ EVENT_0014 ],
    [ EVENT_0013 ],
    [ EVENT_0012 ],
    [ EVENT_0010, EVENT_0011 ],
    [ EVENT_0008, EVENT_0009 ],
    [ EVENT_0007 ],
    [ EVENT_0005, EVENT_0006, EVENT_0006_CHALLENGE ],
    [ EVENT_0002 ],
    [ EVENT_0001, EVENT_0003 ],
]

export default events;
