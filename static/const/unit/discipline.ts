import { UnitCode } from '@/plugins/utils/enums';

const cdnURL = `https://cdn.tkfmdata.com`
const DISCIPLINE_PRESENT = `${cdnURL}/character/discipline/cgs10000.png`
const isPresent = true

function getUnitDisplinePath(id: string, isPresent: boolean = false): string[]{
    var result: string[] = []
    for (let i = 1; i <= 3; i++) {
        if(i == 2 && isPresent)
            result.push(DISCIPLINE_PRESENT)
        else
            result.push(`${cdnURL}/character/discipline/cgs${id}_${i}.png`);
    }
    return result;
}


const R = {
    [UnitCode.irene]: getUnitDisplinePath('10801', isPresent),
    [UnitCode.nana]: getUnitDisplinePath('10802', isPresent),
    [UnitCode.iris]: getUnitDisplinePath('10803', isPresent),
    [UnitCode.dora]: getUnitDisplinePath('10804', isPresent),
    [UnitCode.sable]: getUnitDisplinePath('10805', isPresent),
    [UnitCode.marlene]: getUnitDisplinePath('10806', isPresent),
    [UnitCode.yoi]: getUnitDisplinePath('10807', isPresent),
    [UnitCode.shiraka]: getUnitDisplinePath('10808', isPresent),
    [UnitCode.panana]: getUnitDisplinePath('10812', isPresent),
    [UnitCode.sophie]: getUnitDisplinePath('10810', isPresent),
    [UnitCode.jolina]: getUnitDisplinePath('10811', isPresent),
    [UnitCode.mia]: getUnitDisplinePath('10809', isPresent),
    [UnitCode.iyan]: getUnitDisplinePath('10813', isPresent),
}

const SR = {
    [UnitCode.aiko]: getUnitDisplinePath('10009'),
    [UnitCode.leona]: getUnitDisplinePath('10010'),
    [UnitCode.fiora]: getUnitDisplinePath('10011'),
    [UnitCode.ritsuki]: getUnitDisplinePath('10012'),
    [UnitCode.minayomi]: getUnitDisplinePath('10013'),
    [UnitCode.shizuka]: getUnitDisplinePath('10014'),
    [UnitCode.juneau]: getUnitDisplinePath('10015'),
    [UnitCode.britney]: getUnitDisplinePath('10016'),
    [UnitCode.nafrala]: getUnitDisplinePath('10036'),
    [UnitCode.tyrella]: getUnitDisplinePath('10038'),
    [UnitCode.teresa]: getUnitDisplinePath('10061'),
    [UnitCode.pulicia]: getUnitDisplinePath('10051'),
    [UnitCode.janelle]: getUnitDisplinePath('10046'),
    [UnitCode.tanocia]: getUnitDisplinePath('10055'),
    [UnitCode.yingying]: getUnitDisplinePath('10041'),
}

const SSR = {
    [UnitCode.baal]: getUnitDisplinePath('10001'),
    [UnitCode.satan]: getUnitDisplinePath('10002'),
    [UnitCode.iblis]: getUnitDisplinePath('10003'),
    [UnitCode.salucia]: getUnitDisplinePath('10004'),
    [UnitCode.lana]: getUnitDisplinePath('10005'),
    [UnitCode.lulu]: getUnitDisplinePath('10006'),
    [UnitCode.f_baal]: getUnitDisplinePath('10017', isPresent),
    [UnitCode.i_iblis]: getUnitDisplinePath('10025', isPresent),
    [UnitCode.noel]: getUnitDisplinePath('10026'),
    [UnitCode.ks8]: getUnitDisplinePath('10008'),
    [UnitCode.mesmiia]: getUnitDisplinePath('10037'),
    [UnitCode.e_satan]: getUnitDisplinePath('10027', isPresent),
    [UnitCode.chizuru]: getUnitDisplinePath('10028'),
    [UnitCode.daphne]: getUnitDisplinePath('10057'),
    [UnitCode.s_shizuka]: getUnitDisplinePath('10029'),
    [UnitCode.s_lulu]: getUnitDisplinePath('10030'),
    [UnitCode.s_ks8]: getUnitDisplinePath('10031'),
    [UnitCode.s_nana]: getUnitDisplinePath('10032'),
    [UnitCode.milae]: getUnitDisplinePath('10007'),
    [UnitCode.asida]: getUnitDisplinePath('10034'),
    [UnitCode.asina]: getUnitDisplinePath('10035'),
    [UnitCode.aridya]: getUnitDisplinePath('10033'),
    [UnitCode.lotiya]: getUnitDisplinePath('10039'),
    [UnitCode.fufu]: getUnitDisplinePath('10058'),
    [UnitCode.hm_fiora]: getUnitDisplinePath('10060'),
    [UnitCode.karina]: getUnitDisplinePath('10056'),
    [UnitCode.ibuki]: getUnitDisplinePath('10045'),
    [UnitCode.h_britney]: getUnitDisplinePath('10040'),
    [UnitCode.h_salucia]: getUnitDisplinePath('10043'),
    [UnitCode.inori]: getUnitDisplinePath('10059'),
    [UnitCode.sakuya]: getUnitDisplinePath('10083'),
    [UnitCode.x_aiko]: getUnitDisplinePath('10052'),
    [UnitCode.x_lana]: getUnitDisplinePath('10053'),
    [UnitCode.evie]: getUnitDisplinePath('10054'),
    [UnitCode.tm_minayomi]: getUnitDisplinePath('10067'),
    [UnitCode.tm_ritsuki]: getUnitDisplinePath('10079'),
    [UnitCode.b_baal]: getUnitDisplinePath('10072'),
    [UnitCode.b_iblis]: getUnitDisplinePath('10081'),
    [UnitCode.b_satan]: getUnitDisplinePath('10082'),
    [UnitCode.miru]: getUnitDisplinePath('10084'),
    [UnitCode.uruta]: getUnitDisplinePath('10018'),
    [UnitCode.ayane]: getUnitDisplinePath('10019'),
    [UnitCode.muila]: getUnitDisplinePath('10020'),
    [UnitCode.f_caesar]: getUnitDisplinePath('10050'),
    [UnitCode.w_chizuru]: getUnitDisplinePath('10075'),
    [UnitCode.w_lulu]: getUnitDisplinePath('10076'),
    [UnitCode.faya]: getUnitDisplinePath('10049'),
    [UnitCode.usagihime]: getUnitDisplinePath('10100'),
    [UnitCode.s_iblis]: getUnitDisplinePath('10042'),
    [UnitCode.s_milae]: getUnitDisplinePath('10090'),
    [UnitCode.s_noel]: getUnitDisplinePath('10091'),
    [UnitCode.s_aridya]: getUnitDisplinePath('10092'),
    [UnitCode.ichika]: getUnitDisplinePath('10074'),
    [UnitCode.kana]: getUnitDisplinePath('10085'),
    [UnitCode.q_asida]: getUnitDisplinePath('10088'),
    [UnitCode.q_asina]: getUnitDisplinePath('10089'),
    [UnitCode.emily]: getUnitDisplinePath('10063'),
    [UnitCode.anjelica]: getUnitDisplinePath('10066'),
    [UnitCode.c1_nana]: getUnitDisplinePath('10093'),
    [UnitCode.geneva]: getUnitDisplinePath('10094'),
    [UnitCode.lotus]: getUnitDisplinePath('10068'),
    [UnitCode.didi]: getUnitDisplinePath('10047'),
    [UnitCode.h_leona]: getUnitDisplinePath('10095'),
    [UnitCode.h_lotiya]: getUnitDisplinePath('10096'),
    [UnitCode.sherana]: getUnitDisplinePath('10062'),
    [UnitCode.elizabeth]: getUnitDisplinePath('10024'),
    [UnitCode.xx_aiko]: getUnitDisplinePath('10097'),
    [UnitCode.x_shizuka]: getUnitDisplinePath('10098'),
    [UnitCode.shiro]: getUnitDisplinePath('10021'),
    [UnitCode.ny_salucia]: getUnitDisplinePath('10106'),
    [UnitCode.ny_lana]: getUnitDisplinePath('10107'),
    [UnitCode.v_baal]: getUnitDisplinePath('10108'),
    [UnitCode.v_iblis]: getUnitDisplinePath('10109'),
    [UnitCode.v_satan]: getUnitDisplinePath('10110'),
    [UnitCode.lillane]: getUnitDisplinePath('10069'),
    [UnitCode.c_lulu]: getUnitDisplinePath('10078'),
    [UnitCode.m_juneau]: getUnitDisplinePath('10114'),
    [UnitCode.m_britney]: getUnitDisplinePath('10115'),
    [UnitCode.momo]: getUnitDisplinePath('10048'),
    [UnitCode.n_caesar]: getUnitDisplinePath('10113'),
    [UnitCode.d_irene]: getUnitDisplinePath('10111'),
    [UnitCode.s_ayane]: getUnitDisplinePath('10116'),
    [UnitCode.s_baal]: getUnitDisplinePath('10117'),
    [UnitCode.s_fiora]: getUnitDisplinePath('10118'),
    [UnitCode.s_aiko]: getUnitDisplinePath('10119'),
    [UnitCode.o_lana]: getUnitDisplinePath('10120'),
    [UnitCode.o_nana]: getUnitDisplinePath('10121'),
    [UnitCode.sasha]: getUnitDisplinePath('10071'),
    [UnitCode.bayliss]: getUnitDisplinePath('10077'),
    [UnitCode.a_usagihime]: getUnitDisplinePath('10122'),
    [UnitCode.d_miru]: getUnitDisplinePath('10123'),
    [UnitCode.nyoro]: getUnitDisplinePath('10124'),
    [UnitCode.h_ayane]: getUnitDisplinePath('10125'),
    [UnitCode.h_shiro]: getUnitDisplinePath('10126'),
    [UnitCode.inase]: getUnitDisplinePath('10131'),
    [UnitCode.cartilla]: getUnitDisplinePath('10132'),
    [UnitCode.x_aridya]: getUnitDisplinePath('10127'),
    [UnitCode.x_iblis]: getUnitDisplinePath('10128'),
    [UnitCode.w_evie]: getUnitDisplinePath('10129'),
    [UnitCode.salina]: getUnitDisplinePath('10130'),
    [UnitCode.noma]: getUnitDisplinePath('10022'),
    [UnitCode.belladonna]: getUnitDisplinePath('10023'),
    [UnitCode.nanami]: getUnitDisplinePath('10133'),
    [UnitCode.w_noel]: getUnitDisplinePath('10134'),
    [UnitCode.w_mesmiia]: getUnitDisplinePath('10135'),
    [UnitCode.angelina]: getUnitDisplinePath('10136'),
    [UnitCode.w_lillane]: getUnitDisplinePath('10137'),
    [UnitCode.p_lulu]: getUnitDisplinePath('10138'),
    [UnitCode.p_tyrella]: getUnitDisplinePath('10139'),
    [UnitCode.lelya]: getUnitDisplinePath('10140'),
    [UnitCode.a_nana]: getUnitDisplinePath('10141'),
    [UnitCode.s_chizuru]: getUnitDisplinePath('10142'),
    [UnitCode.s_salucia]: getUnitDisplinePath('10143'),
    [UnitCode.s_caesar]: getUnitDisplinePath('10144'),
    [UnitCode.s_satan]: getUnitDisplinePath('10145'),
    [UnitCode.d_minayomi]: getUnitDisplinePath('10146'),
    [UnitCode.oniyoiki]: getUnitDisplinePath('10147'),
    [UnitCode.beer_shizuka]: getUnitDisplinePath('10148'),
    [UnitCode.tsubaki]: getUnitDisplinePath('10149'),
    [UnitCode.amethystina]: getUnitDisplinePath('10044'),
    [UnitCode.bg_ayane]: getUnitDisplinePath('10150'),
    [UnitCode.bg_iblis]: getUnitDisplinePath('10151'),
    [UnitCode.susan]: getUnitDisplinePath('10152'),
    [UnitCode.h_satan]: getUnitDisplinePath('10153'),
    [UnitCode.m_nanami]: getUnitDisplinePath('10154'),
    [UnitCode.m_ks8]: getUnitDisplinePath('10155'),
    [UnitCode.x_baal]: getUnitDisplinePath('10156'),
    [UnitCode.x_muila]: getUnitDisplinePath('10157'),
    [UnitCode.x_britney]: getUnitDisplinePath('10158'),
    [UnitCode.x_ichika]: getUnitDisplinePath('10175'),
    [UnitCode.ny_fiora]: getUnitDisplinePath('10159'),
    [UnitCode.zaskia]: getUnitDisplinePath('10161'),
    [UnitCode.p_aiko]: getUnitDisplinePath('10162'),
    [UnitCode.ni_caesar]: getUnitDisplinePath('10163'),
    [UnitCode.f_kana]: getUnitDisplinePath('10164'),
    [UnitCode.star_mia]: getUnitDisplinePath('10165'),
    [UnitCode.star_annee]: getUnitDisplinePath('10166'),
    [UnitCode.bedard]: getUnitDisplinePath('10176'),
    [UnitCode.c_noel]: getUnitDisplinePath('10167'),
    [UnitCode.eunice]: getUnitDisplinePath('10168'),
    [UnitCode.momDaphne]: getUnitDisplinePath('10169'),
    [UnitCode.w_tsubaki]: getUnitDisplinePath('10170'),
    [UnitCode.ss_iblis]: getUnitDisplinePath('10171'),
    [UnitCode.s_evie]: getUnitDisplinePath('10172'),
    [UnitCode.s_noma]: getUnitDisplinePath('10173'),
    [UnitCode.forneusa]: getUnitDisplinePath('10174'),
    [UnitCode.bu_ayane]: getUnitDisplinePath('10160'),
}

export const DisciplinePreview = {
    ...R,
    ...SR,
    ...SSR
}