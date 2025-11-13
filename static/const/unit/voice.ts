import { VoiceLocale, UnitCode, VoiceType } from '@/plugins/utils/enums';
import { VoiceSet } from '~/interface/unit';
import bedard_2nd_voice from '~/static/custom/bedard_2nd_voice';

const cdnURL = `https://cdn.tkfmdata.com`

function getUnitVoicePath(id: string): VoiceSet[]{
    return [
        {
            version: 1,
            voice: {
                [VoiceType.GREET]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}01_jp.wav` 
                },
                [VoiceType.CONFUSED]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}02_jp.wav` 
                },
                [VoiceType.HAPPY]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}03_jp.wav` 
                },
                [VoiceType.ANGRY]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}04_jp.wav` 
                },
                [VoiceType.SAD]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}05_jp.wav` 
                },
                [VoiceType.FURIOUS]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}06_jp.wav` 
                },
                [VoiceType.AGREE]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}07_jp.wav` 
                },
                [VoiceType.DISAGREE]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}08_jp.wav` 
                },
                [VoiceType.PROMISE]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}09_jp.wav` 
                },
                [VoiceType.ATTACK]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}10_jp.wav` 
                },
                [VoiceType.SKILL]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}11_jp.wav` 
                },
                [VoiceType.TAKE_DAMAGE]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}12_jp.wav` 
                },
                [VoiceType.DEATH]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}13_jp.wav` 
                },
                [VoiceType.DISCIPLINE_1]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}14_jp.wav` 
                },
                [VoiceType.DISCIPLINE_2]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}15_jp.wav` 
                },
                [VoiceType.DISCIPLINE_3]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}16_jp.wav` 
                },
                [VoiceType.ORGASM]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}17_jp.wav` 
                },
                [VoiceType.CHARACTER_FEATURE_1]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}18_jp.wav` 
                },
                [VoiceType.CHARACTER_FEATURE_2]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}19_jp.wav` 
                },
                [VoiceType.CHARACTER_FEATURE_3]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}20_jp.wav` 
                },
                [VoiceType.CHARACTER_FEATURE_4]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}21_jp.wav` 
                },
                [VoiceType.CHARACTER_FEATURE_5]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}22_jp.wav` 
                },
                [VoiceType.VICTORY]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}23_jp.wav` 
                },
                [VoiceType.DEFEAT]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}24_jp.wav` 
                },
                [VoiceType.SEX_MOANS]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}25_jp.wav` 
                },
                [VoiceType.BLOWJOB]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}26_jp.wav` 
                },
                [VoiceType.KISS]: { 
                    [VoiceLocale.jp]: `${cdnURL}/character/voice/jp/sound${id}_jp/se${id}27_jp.wav` 
                },
            }
        }
    ]
}

const N = {
    [UnitCode.saria]: getUnitVoicePath('10901'),
    [UnitCode.petra]: getUnitVoicePath('10902'),
    [UnitCode.flay]: getUnitVoicePath('10903'),
    [UnitCode.manuella]: getUnitVoicePath('10904'),
    [UnitCode.kikyou]: getUnitVoicePath('10905'),
    [UnitCode.kaede]: getUnitVoicePath('10906'),
    [UnitCode.ola]: getUnitVoicePath('10907'),
    [UnitCode.kani]: getUnitVoicePath('10908'),
    [UnitCode.charlene]: getUnitVoicePath('10909'),
    [UnitCode.martina]: getUnitVoicePath('10910'),
    [UnitCode.clarie]: getUnitVoicePath('10911'),
    [UnitCode.lori]: getUnitVoicePath('10912'),
    [UnitCode.minnow]: getUnitVoicePath('10913'),
    [UnitCode.lamia]: getUnitVoicePath('10914'),
    [UnitCode.harpy]: getUnitVoicePath('10915'),
    [UnitCode.anna]: getUnitVoicePath('10916'),
    [UnitCode.blaire]: getUnitVoicePath('10917'),
    [UnitCode.natasha]: getUnitVoicePath('10918'),
    [UnitCode.prototype]: getUnitVoicePath('10922'),
    [UnitCode.punishment]: getUnitVoicePath('10919'),
    [UnitCode.bliss]: getUnitVoicePath('10920'),
    [UnitCode.mareyl]: getUnitVoicePath('10923'),
    [UnitCode.mumu]: getUnitVoicePath('10924'),
    [UnitCode.molly]: getUnitVoicePath('10921'),
    [UnitCode.anya]: getUnitVoicePath('10933'),
}

const R = {
    [UnitCode.irene]: getUnitVoicePath('10801'),
    [UnitCode.nana]: getUnitVoicePath('10802'),
    [UnitCode.iris]: getUnitVoicePath('10803'),
    [UnitCode.dora]: getUnitVoicePath('10804'),
    [UnitCode.sable]: getUnitVoicePath('10805'),
    [UnitCode.marlene]: getUnitVoicePath('10806'),
    [UnitCode.yoi]: getUnitVoicePath('10807'),
    [UnitCode.shiraka]: getUnitVoicePath('10808'),
    [UnitCode.panana]: getUnitVoicePath('10812'),
    [UnitCode.sophie]: getUnitVoicePath('10810'),
    [UnitCode.jolina]: getUnitVoicePath('10811'),
    [UnitCode.mia]: getUnitVoicePath('10809'),
    [UnitCode.iyan]: getUnitVoicePath('10813'),
}

const SR = {
    [UnitCode.aiko]: getUnitVoicePath('10009'),
    [UnitCode.leona]: getUnitVoicePath('10010'),
    [UnitCode.fiora]: getUnitVoicePath('10011'),
    [UnitCode.ritsuki]: getUnitVoicePath('10012'),
    [UnitCode.minayomi]: getUnitVoicePath('10013'),
    [UnitCode.shizuka]: getUnitVoicePath('10014'),
    [UnitCode.juneau]: getUnitVoicePath('10015'),
    [UnitCode.britney]: getUnitVoicePath('10016'),
    [UnitCode.nafrala]: getUnitVoicePath('10036'),
    [UnitCode.tyrella]: getUnitVoicePath('10038'),
    [UnitCode.teresa]: getUnitVoicePath('10061'),
    [UnitCode.pulicia]: getUnitVoicePath('10051'),
    [UnitCode.janelle]: getUnitVoicePath('10046'),
    [UnitCode.tanocia]: getUnitVoicePath('10055'),
    [UnitCode.yingying]: getUnitVoicePath('10041'),
}

const SSR = {
    [UnitCode.baal]: getUnitVoicePath('10001'),
    [UnitCode.satan]: getUnitVoicePath('10002'),
    [UnitCode.iblis]: getUnitVoicePath('10003'),
    [UnitCode.salucia]: getUnitVoicePath('10004'),
    [UnitCode.lana]: getUnitVoicePath('10005'),
    [UnitCode.lulu]: getUnitVoicePath('10006'),
    [UnitCode.f_baal]: getUnitVoicePath('10017'),
    [UnitCode.i_iblis]: getUnitVoicePath('10025'),
    [UnitCode.noel]: getUnitVoicePath('10026'),
    [UnitCode.ks8]: getUnitVoicePath('10008'),
    [UnitCode.mesmiia]: getUnitVoicePath('10037'),
    [UnitCode.e_satan]: getUnitVoicePath('10027'),
    [UnitCode.chizuru]: getUnitVoicePath('10028'),
    [UnitCode.daphne]: getUnitVoicePath('10057'),
    [UnitCode.s_shizuka]: getUnitVoicePath('10029'),
    [UnitCode.s_lulu]: getUnitVoicePath('10030'),
    [UnitCode.s_ks8]: getUnitVoicePath('10031'),
    [UnitCode.s_nana]: getUnitVoicePath('10032'),
    [UnitCode.milae]: getUnitVoicePath('10007'),
    [UnitCode.asida]: getUnitVoicePath('10034'),
    [UnitCode.asina]: getUnitVoicePath('10035'),
    [UnitCode.aridya]: getUnitVoicePath('10033'),
    [UnitCode.lotiya]: getUnitVoicePath('10039'),
    [UnitCode.fufu]: getUnitVoicePath('10058'),
    [UnitCode.hm_fiora]: getUnitVoicePath('10060'),
    [UnitCode.karina]: getUnitVoicePath('10056'),
    [UnitCode.ibuki]: getUnitVoicePath('10045'),
    [UnitCode.h_britney]: getUnitVoicePath('10040'),
    [UnitCode.h_salucia]: getUnitVoicePath('10043'),
    [UnitCode.inori]: getUnitVoicePath('10059'),
    [UnitCode.sakuya]: getUnitVoicePath('10083'),
    [UnitCode.x_aiko]: getUnitVoicePath('10052'),
    [UnitCode.x_lana]: getUnitVoicePath('10053'),
    [UnitCode.evie]: getUnitVoicePath('10054'),
    [UnitCode.tm_minayomi]: getUnitVoicePath('10067'),
    [UnitCode.tm_ritsuki]: getUnitVoicePath('10079'),
    [UnitCode.b_baal]: getUnitVoicePath('10072'),
    [UnitCode.b_iblis]: getUnitVoicePath('10081'),
    [UnitCode.b_satan]: getUnitVoicePath('10082'),
    [UnitCode.miru]: getUnitVoicePath('10084'),
    [UnitCode.uruta]: getUnitVoicePath('10018'),
    [UnitCode.ayane]: getUnitVoicePath('10019'),
    [UnitCode.muila]: getUnitVoicePath('10020'),
    [UnitCode.f_caesar]: getUnitVoicePath('10050'),
    [UnitCode.w_chizuru]: getUnitVoicePath('10075'),
    [UnitCode.w_lulu]: getUnitVoicePath('10076'),
    [UnitCode.faya]: getUnitVoicePath('10049'),
    [UnitCode.usagihime]: getUnitVoicePath('10100'),
    [UnitCode.s_iblis]: getUnitVoicePath('10042'),
    [UnitCode.s_milae]: getUnitVoicePath('10090'),
    [UnitCode.s_noel]: getUnitVoicePath('10091'),
    [UnitCode.s_aridya]: getUnitVoicePath('10092'),
    [UnitCode.ichika]: getUnitVoicePath('10074'),
    [UnitCode.kana]: getUnitVoicePath('10085'),
    [UnitCode.q_asida]: getUnitVoicePath('10088'),
    [UnitCode.q_asina]: getUnitVoicePath('10089'),
    [UnitCode.emily]: getUnitVoicePath('10063'),
    [UnitCode.anjelica]: getUnitVoicePath('10066'),
    [UnitCode.c1_nana]: getUnitVoicePath('10093'),
    [UnitCode.geneva]: getUnitVoicePath('10094'),
    [UnitCode.lotus]: getUnitVoicePath('10068'),
    [UnitCode.didi]: getUnitVoicePath('10047'),
    [UnitCode.h_leona]: getUnitVoicePath('10095'),
    [UnitCode.h_lotiya]: getUnitVoicePath('10096'),
    [UnitCode.sherana]: getUnitVoicePath('10062'),
    [UnitCode.elizabeth]: getUnitVoicePath('10024'),
    [UnitCode.xx_aiko]: getUnitVoicePath('10097'),
    [UnitCode.x_shizuka]: getUnitVoicePath('10098'),
    [UnitCode.shiro]: getUnitVoicePath('10021'),
    [UnitCode.ny_salucia]: getUnitVoicePath('10106'),
    [UnitCode.ny_lana]: getUnitVoicePath('10107'),
    [UnitCode.v_baal]: getUnitVoicePath('10108'),
    [UnitCode.v_iblis]: getUnitVoicePath('10109'),
    [UnitCode.v_satan]: getUnitVoicePath('10110'),
    [UnitCode.lillane]: getUnitVoicePath('10069'),
    [UnitCode.c_lulu]: getUnitVoicePath('10078'),
    [UnitCode.m_juneau]: getUnitVoicePath('10114'),
    [UnitCode.m_britney]: getUnitVoicePath('10115'),
    [UnitCode.momo]: getUnitVoicePath('10048'),
    [UnitCode.n_caesar]: getUnitVoicePath('10113'),
    [UnitCode.d_irene]: getUnitVoicePath('10111'),
    [UnitCode.s_ayane]: getUnitVoicePath('10116'),
    [UnitCode.s_baal]: getUnitVoicePath('10117'),
    [UnitCode.s_fiora]: getUnitVoicePath('10118'),
    [UnitCode.s_aiko]: getUnitVoicePath('10119'),
    [UnitCode.o_lana]: getUnitVoicePath('10120'),
    [UnitCode.o_nana]: getUnitVoicePath('10121'),
    [UnitCode.sasha]: getUnitVoicePath('10071'),
    [UnitCode.bayliss]: getUnitVoicePath('10077'),
    [UnitCode.a_usagihime]: getUnitVoicePath('10122'),
    [UnitCode.d_miru]: getUnitVoicePath('10123'),
    [UnitCode.nyoro]: getUnitVoicePath('10124'),
    [UnitCode.h_ayane]: getUnitVoicePath('10125'),
    [UnitCode.h_shiro]: getUnitVoicePath('10126'),
    [UnitCode.inase]: getUnitVoicePath('10131'),
    [UnitCode.cartilla]: getUnitVoicePath('10132'),
    [UnitCode.x_aridya]: getUnitVoicePath('10127'),
    [UnitCode.x_iblis]: getUnitVoicePath('10128'),
    [UnitCode.w_evie]: getUnitVoicePath('10129'),
    [UnitCode.salina]: getUnitVoicePath('10130'),
    [UnitCode.noma]: getUnitVoicePath('10022'),
    [UnitCode.belladonna]: getUnitVoicePath('10023'),
    [UnitCode.nanami]: getUnitVoicePath('10133'),
    [UnitCode.w_noel]: getUnitVoicePath('10134'),
    [UnitCode.w_mesmiia]: getUnitVoicePath('10135'),
    [UnitCode.angelina]: getUnitVoicePath('10136'),
    [UnitCode.w_lillane]: getUnitVoicePath('10137'),
    [UnitCode.p_lulu]: getUnitVoicePath('10138'),
    [UnitCode.p_tyrella]: getUnitVoicePath('10139'),
    [UnitCode.lelya]: getUnitVoicePath('10140'),
    [UnitCode.a_nana]: getUnitVoicePath('10141'),
    [UnitCode.s_chizuru]: getUnitVoicePath('10142'),
    [UnitCode.s_salucia]: getUnitVoicePath('10143'),
    [UnitCode.s_caesar]: getUnitVoicePath('10144'),
    [UnitCode.s_satan]: getUnitVoicePath('10145'),
    [UnitCode.d_minayomi]: getUnitVoicePath('10146'),
    [UnitCode.oniyoiki]: getUnitVoicePath('10147'),
    [UnitCode.beer_shizuka]: getUnitVoicePath('10148'),
    [UnitCode.tsubaki]: getUnitVoicePath('10149'),
    [UnitCode.amethystina]: getUnitVoicePath('10044'),
    [UnitCode.bg_ayane]: getUnitVoicePath('10150'),
    [UnitCode.bg_iblis]: getUnitVoicePath('10151'),
    [UnitCode.susan]: getUnitVoicePath('10152'),
    [UnitCode.h_satan]: getUnitVoicePath('10153'),
    [UnitCode.m_nanami]: getUnitVoicePath('10154'),
    [UnitCode.m_ks8]: getUnitVoicePath('10155'),
    [UnitCode.x_baal]: getUnitVoicePath('10156'),
    [UnitCode.x_muila]: getUnitVoicePath('10157'),
    [UnitCode.x_britney]: getUnitVoicePath('10158'),
    [UnitCode.x_ichika]: getUnitVoicePath('10175'),
    [UnitCode.ny_fiora]: getUnitVoicePath('10159'),
    [UnitCode.zaskia]: getUnitVoicePath('10161'),
    [UnitCode.p_aiko]: getUnitVoicePath('10162'),
    [UnitCode.ni_caesar]: getUnitVoicePath('10163'),
    [UnitCode.f_kana]: getUnitVoicePath('10164'),
    [UnitCode.star_mia]: getUnitVoicePath('10165'),
    [UnitCode.star_annee]: getUnitVoicePath('10166'),
    [UnitCode.bedard]: bedard_2nd_voice.concat(getUnitVoicePath('10176')),
    [UnitCode.c_noel]: getUnitVoicePath('10167'),
    [UnitCode.eunice]: getUnitVoicePath('10168'),
    [UnitCode.momDaphne]: getUnitVoicePath('10169'),
    [UnitCode.w_tsubaki]: getUnitVoicePath('10170'),
    [UnitCode.ss_iblis]: getUnitVoicePath('10171'),
    [UnitCode.s_evie]: getUnitVoicePath('10172'),
    [UnitCode.s_noma]: getUnitVoicePath('10173'),
    [UnitCode.forneusa]: getUnitVoicePath('10174'),
    [UnitCode.bu_ayane]: getUnitVoicePath('10160'),
    [UnitCode.sky_nanami]: getUnitVoicePath('10177'),
    [UnitCode.sky_baal]: getUnitVoicePath('10178'),
    [UnitCode.n_lulu]: getUnitVoicePath('10179'),
    [UnitCode.yuri]: getUnitVoicePath('10180'),
    [UnitCode.l_ayane]: getUnitVoicePath('10181'),
    [UnitCode.ria]: getUnitVoicePath('10182'),
    [UnitCode.g_britney]: getUnitVoicePath('10183'),
    [UnitCode.h_momDaphne]: getUnitVoicePath('10184'),
    [UnitCode.lilinor]: getUnitVoicePath('10185'),
    [UnitCode.m_salucia]: getUnitVoicePath('10186'),
    [UnitCode.lutty]: getUnitVoicePath('10187'),
}

export const Voice = {
    ...N,
    ...R,
    ...SR,
    ...SSR
}