'use strict';

module.exports = (robot) => {
    robot.hear(/モイラ/i, (msg) => {
        console.log(2434)
        ///にじさんじ 一期生　----------------------------------------------------------------------------------------
        msg.send(`モイラの公式サイトです
        https://nijisanji.ichikara.co.jp/member/moira/ `)

        msg.send(`モイラの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%83%A2%E3%82%A4%E3%83%A9#notefoot_7　`)
        msg.send(` モイラのYutubeチャンネルです
        https://www.youtube.com/channel/UCvmppcdYf4HOv-tFQhHHJMA `)
    })
    robot.hear(/鈴谷アキ/i, (msg) => {
        msg.send(`鈴谷アキの公式サイトです
        https://nijisanji.ichikara.co.jp/member/Aki-Suzuya/`)

        msg.send(`鈴谷アキの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E9%88%B4%E8%B0%B7%E3%82%A2%E3%82%AD` )

        msg.send(`鈴谷アキのYutubeチャンネルです
        https://www.youtube.com/channel/UCpnvhOIJ6BN-vPkYU9ls-Eg/featured`)
    })
    robot.hear(/渋谷ハジメ|ハジキ/i, (msg) => {
        msg.send(`渋谷ハジメの公式サイト
        https://nijisanji.ichikara.co.jp/member/Hajime-Shibuya/`)

        msg.send(`渋谷ハジメの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E6%B8%8B%E8%B0%B7%E3%83%8F%E3%82%B8%E3%83%A1`)

        msg.send(`渋谷ハジメのYutubeチャンネルです
        https://www.youtube.com/channel/UCeK9HFcRZoTrvqcUCtccMoQ`)

    })
    robot.hear(/樋口楓|でろーん/i, (msg) => {
        msg.send(`樋口楓の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Kaede-Higuchi/`)

        msg.send(`樋口楓の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E6%A8%8B%E5%8F%A3%E6%A5%93`)

        msg.send(`樋口楓のYutubetチャンネルです
        https://www.youtube.com/channel/UCsg-YqdqQ-KFF0LNk23BY4A`)
    })
    robot.hear(/月ノ美兎|委員長/i, (msg) => {
        msg.send(`月ノ美兎の公式サイトです
        https://nijisanji.ichikara.co.jp/member/mito-tsukino/`)

        msg.send(`月ノ美兎の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E6%9C%88%E3%83%8E%E7%BE%8E%E5%85%8E`)

        msg.send(`月ノ美兎のYutubeチャンネルです
        https://www.youtube.com/channel/UCD-miitqNY3nyukJ4Fnf4_A`)
    })
    robot.hear(/勇気ちひろ/i, (msg) => {
        msg.send(`勇気ちひろの公式サイトです
        https://nijisanji.ichikara.co.jp/member/Chihiro-Yuki/`)

        msg.send(`勇気ちひろの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%8B%87%E6%B0%97%E3%81%A1%E3%81%B2%E3%82%8D`)

        msg.send(`勇気ちひろのYutubeチャンネルです
        https://www.youtube.com/channel/UCLO9QDxVL4bnvRRsz6K4bsQ`)
    })
    robot.hear(/静凛|しずりん/i, (msg) => {
        msg.send(`静凛の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Rin-Shizuka/`)

        msg.send(`静凛の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E9%9D%99%E5%87%9B`)

        msg.send(`静凛のYutubeチャンネルです
        https://www.youtube.com/channel/UC6oDys1BGgBsIC3WhG1BovQ`)
    })
    robot.hear(/える|エルフのえる|えるえる|スノー・ホワイト・パラダイス・エルサント・フロウ・ワスレナ・ピュア・プリンセス・リーブル・ラブ・ハイデルン・ドコドコ・ヤッタゼ・ヴァルキュリア・パッション・アールヴ・ノエル・チャコボシ・エルアリア・フロージア・メイドイン・ブルーム・エル/i, (msg) => {
        msg.send(`えるの公式サイトです
        https://nijisanji.ichikara.co.jp/member/Elu/`)

        msg.send(`えるの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%81%88%E3%82%8B`)

        msg.send(`えるのYutubeチャンネルです
        https://www.youtube.com/channel/UCYKP16oMX9KKPbrNgo_Kgag`)
    })
    //にじさんじ 2期世 ----------------------------------------------------------------------------------------------------------------------
    robot.hear(/家長むぎ|むぎむぎ/i, (msg) => {
        msg.send(`家長むぎの公式サイトです
        https://nijisanji.ichikara.co.jp/member/Mugi-Ienaga/`)

        msg.send(`家長むぎの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%AE%B6%E9%95%B7%E3%82%80%E3%81%8E`)

        msg.send(`家長むぎのYutubeチャンネルです
        https://www.youtube.com/channel/UC_GCs6GARLxEHxy1w40d6VQ`)
    })
    robot.hear(/夕陽リリ/i, (msg) => {
        msg.send(`夕陽リリの公式サイトです
        https://nijisanji.ichikara.co.jp/member/Riri-Yuhi/`)

        msg.send(`夕陽リリの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%A4%95%E9%99%BD%E3%83%AA%E3%83%AA`)

        msg.send(`夕陽リリのYutubeチャンネルです
        https://www.youtube.com/channel/UC48jH1ul-6HOrcSSfoR02fQ`)
    })
    robot.hear(/伏見ガク|ガクくん/i, (msg) => {
        msg.send(`伏見ガクの公式サイトです
        https://nijisanji.ichikara.co.jp/member/Gaku-Fushimi/`)

        msg.send(`伏見ガクの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E4%BC%8F%E8%A6%8B%E3%82%AC%E3%82%AF`)

        msg.send(`伏見ガクのYutubeチャンネルです
        https://www.youtube.com/channel/UCXU7YYxy_iQd3ulXyO-zC2w`)
    })
    robot.hear(/剣持刀也|アゴ/i, (msg) => {
        msg.send(`剣持刀也の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Toya-Kenmochi/`)

        msg.send(`剣持刀也の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%89%A3%E6%8C%81%E5%88%80%E4%B9%9F`)

        msg.send(`剣持刀也のYutubeチャンネルです
        https://www.youtube.com/channel/UCv1fFr156jc65EMiLbaLImw`)
    })
    robot.hear(/物部有栖/i, (msg) => {
        msg.send(`物部有栖の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Alice-Mononobe/`)

        msg.send(`物部有栖の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E7%89%A9%E8%BF%B0%E6%9C%89%E6%A0%96`)

        msg.send(`物部有栖のYutubeチャンネルです
        https://www.youtube.com/channel/UCt0clH12Xk1-Ej5PXKGfdPA`)
    })
    robot.hear(/宇志海いちご/i, (msg) => {
        msg.send(`宇志海いちごの公式サイトです
        https://nijisanji.ichikara.co.jp/member/Ichigo-Ushimi/`)

        msg.send(`宇志海いちごの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E7%89%A9%E8%BF%B0%E6%9C%89%E6%A0%96`)

        msg.send(`宇志海いちごのYutubeチャンネルです
        https://www.youtube.com/channel/UCt0clH12Xk1-Ej5PXKGfdPA`)
    })
    robot.hear(/鈴鹿歌子|歌子おねえさん/i, (msg) => {
        msg.send(`鈴鹿歌子の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Utako-Suzuka/`)

        msg.send(`鈴鹿歌子の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E9%88%B4%E9%B9%BF%E8%A9%A9%E5%AD%90`)

        msg.send(`鈴鹿歌子のYutubeチャンネルです
        https://www.youtube.com/channel/UCwokZsOK_uEre70XayaFnzA`)
    })
    robot.hear(/ギルザレンⅢ世|ギル様/i, (msg) => {
        msg.send(`ギルザレンⅢ世の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Gilzaren-%E2%85%A2/`)

        msg.send(`ギルザレンⅢ世の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%82%AE%E3%83%AB%E3%82%B6%E3%83%AC%E3%83%B3III%E4%B8%96`)

        msg.send(`ギルザレンⅢ世のYutubeチャンネルです
        https://www.youtube.com/channel/UCUzJ90o1EjqUbk2pBAy0_aw`)
    })
    robot.hear(/文野環/i, (msg) => {
        msg.send(`文野環の公式サイトです
        https://nijisanji.ichikara.co.jp/member/tamaki-fumino/`)

        msg.send(`文野環の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E6%96%87%E9%87%8E%E7%92%B0`)

        msg.send(`文野環のYutubeチャンネルです
        https://www.youtube.com/channel/UCBiqkFJljoxAj10SoP2w2Cg`)
    })
    robot.hear(/森中花咲|かざちゃん/i, (msg) => {
        msg.send(`森中花咲の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Kazaki-Morinaka/`)

        msg.send(`森中花咲の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E6%A3%AE%E4%B8%AD%E8%8A%B1%E5%92%B2`)

        msg.send(`森中花咲のYutubeチャンネルです
        https://www.youtube.com/channel/UCtpB6Bvhs1Um93ziEDACQ8g`)
    })
    //-----------------------------------------------------------------------------------------

    //にじさんじ SEEDs一期生　-------------------------------------------------------------------------
    robot.hear(/安土桃/i, (msg) => {
        msg.send(`安土桃の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Momo-Aduchi/`)

        msg.send(`安土桃の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%AE%89%E5%9C%9F%E6%A1%83`)

        msg.send(`安土桃のYutubeチャンネルです
        https://www.youtube.com/channel/UC6TfqY40Xt1Y0J-N18c85qQ`)
    })
    robot.hear(/卯月コウ|御曹司/i, (msg) => {
        msg.send(`卯月コウの公式サイトです
        https://nijisanji.ichikara.co.jp/member/Kou-Uduki/`)

        msg.send(`卯月コウの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%8D%AF%E6%9C%88%E3%82%B3%E3%82%A6`)

        msg.send(`卯月コウのYutubeチャンネルです
        https://www.youtube.com/channel/UC3lNFeJiTq6L3UWoz4g1e-A`)
    })
    robot.hear(/鈴木勝/i, (msg) => {
        msg.send(`鈴木勝の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Masaru-Suzuki/`)

        msg.send(`鈴木勝の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E9%88%B4%E6%9C%A8%E5%8B%9D`)

        msg.send(`鈴木勝のYutubeチャンネルです
        https://www.youtube.com/channel/UCt5-0i4AVHXaWJrL8Wql3mw`)
    })
    robot.hear(/ドーラ|ドーラ様/i, (msg) => {
        msg.send(`ドーラの公式サイトです
        https://nijisanji.ichikara.co.jp/member/dola/`)

        msg.send(`ドーラの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%83%89%E3%83%BC%E3%83%A9`)

        msg.send(`ドーラのYutubeチャンネルです
        https://www.youtube.com/channel/UC53UDnhAAYwvNO7j_2Ju1cQ`)
    })
    robot.hear(/出雲霞|イカスミ/i, (msg) => {
        msg.send(`出雲霞の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Kasumi-Izumo/`)

        msg.send(`出雲霞の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%87%BA%E9%9B%B2%E9%9C%9E`)

        msg.send(`出雲霞のYutubeチャンネルです
        https://www.youtube.com/channel/UCLpYMk5h1bq8_GAFVBgXhPQ`)
    })
    robot.hear(/轟京子/i, (msg) => {
        msg.send(`轟京子の公式サイトです
        https://nijisanji.ichikara.co.jp/member/kyoko-todoroki/`)

        msg.send(`轟京子の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E8%BD%9F%E4%BA%AC%E5%AD%90`)

        msg.send(`轟京子のYutubeチャンネルです
        https://www.youtube.com/channel/UCRV9d6YCYIMUszK-83TwxVA`)
    })
    robot.hear(/シスタークレア|クレア様/i, (msg) => {
        msg.send(`シスタークレアの公式サイトです
        https://nijisanji.ichikara.co.jp/member/Sister-Claire/`)

        msg.send(`シスタークレアの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%82%B7%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%BB%E3%82%AF%E3%83%AC%E3%82%A2`)

        msg.send(`シスタークレアのYutubeチャンネルです
        https://www.youtube.com/channel/UC1zFJrfEKvCixhsjNSb1toQ`)
    })
    robot.hear(/花畑チャイカ|バランの妖精|バランの集合体/i, (msg) => {
        msg.send(`花畑チャイカの公式サイトです
        https://nijisanji.ichikara.co.jp/member/Sister-Claire/`)

        msg.send(`花畑チャイカの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%82%B7%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%BB%E3%82%AF%E3%83%AC%E3%82%A2`)

        msg.send(`花畑チャイカのYutubeチャンネルです
        https://www.youtube.com/channel/UC1zFJrfEKvCixhsjNSb1toQ`)
    })
    robot.hear(/社築/i, (msg) => {
        msg.send(`社築の公式サイトです
        https://nijisanji.ichikara.co.jp/member/kizuku-yashiro/`)

        msg.send(`社築の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E8%8A%B1%E7%95%91%E3%83%81%E3%83%A3%E3%82%A4%E3%82%AB`)

        msg.send(`社築のYutubeチャンネルです
        https://www.youtube.com/channel/UCsFn_ueskBkMCEyzCEqAOvg`)
    })
    //---------------------------------------------------------------------------------------------------------------

    //にじさんじ SEEDs2期　------------------------------------------------------------------------------------------------
    robot.hear(/春崎エアル/i, (msg) => {
        msg.send(`春崎エアルの公式サイトです
        https://nijisanji.ichikara.co.jp/member/air-harusaki/`)

        msg.send(`春崎エアルの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E6%98%A5%E5%B4%8E%E3%82%A8%E3%82%A2%E3%83%AB`)

        msg.send(`春崎エアルのYutubeチャンネルです
        https://www.youtube.com/channel/UCtAvQ5U0aXyKwm2i4GqFgJg`)
    })
    robot.hear(/成瀬鳴/i, (msg) => {
        msg.send(`成瀬鳴の公式サイトです
        https://nijisanji.ichikara.co.jp/member/naru-naruse/`)

        msg.send(`成瀬鳴の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E6%98%A5%E5%B4%8E%E3%82%A8%E3%82%A2%E3%83%AB`)

        msg.send(`成瀬鳴のYutubeチャンネルです
        https://www.youtube.com/channel/UCtAvQ5U0aXyKwm2i4GqFgJg`)
    })
    robot.hear(/鷹宮リオン|リオン様|お嬢/i, (msg) => {
        msg.send(`鷹宮リオンの公式サイトです
        https://nijisanji.ichikara.co.jp/member/Rion-Takamiya/`)

        msg.send(`鷹宮リオンの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E9%B7%B9%E5%AE%AE%E3%83%AA%E3%82%AA%E3%83%B3`)

        msg.send(`鷹宮リオンのYutubeチャンネルです
        https://www.youtube.com/channel/UCV5ZZlLjk5MKGg3L0n0vbzw`)
    })
    robot.hear(/神田笑一/i, (msg) => {
        msg.send(`神田笑一の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Shoichi-Kanda/`)

        msg.send(`神田笑一の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E7%A5%9E%E7%94%B0%E7%AC%91%E4%B8%80`)

        msg.send(`神田笑一のYutubeチャンネルです
        https://www.youtube.com/channel/UCWz0CSYCxf4MhRKPDm220AQ`)
    })
    robot.hear(/雨森小夜/i, (msg) => {
        msg.send(`雨森小夜の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Sayo-Amemori/`)

        msg.send(`雨森小夜の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E9%9B%A8%E6%A3%AE%E5%B0%8F%E5%A4%9C`)

        msg.send(`雨森小夜のYutubeチャンネルです
        https://www.youtube.com/channel/UCRWOdwLRsenx2jLaiCAIU4A`)
    })
    robot.hear(/飛鳥ひな|ひなP/i, (msg) => {
        msg.send(`飛鳥ひなの公式サイトです
        https://nijisanji.ichikara.co.jp/member/Hina-Asuka/`)

        msg.send(`飛鳥ひなの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E9%A3%9B%E9%B3%A5%E3%81%B2%E3%81%AA`)

        msg.send(`飛鳥ひなのYutubeチャンネルです
        https://www.youtube.com/channel/UCiSRx1a2k-0tOg-fs6gAolQ`)
    })
    robot.hear(/舞元啓介|マスクドいちから/i, (msg) => {
        msg.send(`舞元啓介の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Keisuke-Maimoto/`)

        msg.send(`舞元啓介の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E8%88%9E%E5%85%83%E5%95%93%E4%BB%8B`)

        msg.send(`舞元啓介のYutubeチャンネルです
        https://www.youtube.com/channel/UCJubINhCcFXlsBwnHp0wl_g`)
    })
    robot.hear(/竜胆尊|尊様/i, (msg) => {
        msg.send(`竜胆尊の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Mikoto-Rindou/`)

        msg.send(`竜胆尊の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E7%AB%9C%E8%83%86%E5%B0%8A`)

        msg.send(`竜胆尊のYutubeチャンネルです
        https://www.youtube.com/channel/UCPvGypSgfDkVe7JG2KygK7A`)
    })
    robot.hear(/でびでび・でびる/i, (msg) => {
        msg.send(`でびでび・でびるの公式サイトです
        https://nijisanji.ichikara.co.jp/member/debidebi-debiru/`)

        msg.send(`でびでび・でびるの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%81%A7%E3%81%B3%E3%81%A7%E3%81%B3%E3%83%BB%E3%81%A7%E3%81%B3%E3%82%8B`)

        msg.send(`でびでび・でびるのYutubeチャンネルです
        https://www.youtube.com/channel/UCjlmCrq4TP1I4xguOtJ-31w`)
    })
    robot.hear(/桜凛月|りつきん/i, (msg) => {
        msg.send(`桜凛月の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Ritsuki-Sakura/`)

        msg.send(`桜凛月の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E6%A1%9C%E5%87%9B%E6%9C%88`)

        msg.send(`桜凛月のYutubeチャンネルです
        https://www.youtube.com/channel/UCfQVs_KuXeNAlGa3fb8rlnQ`)
    })
    robot.hear(/町田ちま/i, (msg) => {
        msg.send(`町田ちまの公式サイトです
        https://nijisanji.ichikara.co.jp/member/chima-machita/`)

        msg.send(`町田ちまの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E7%94%BA%E7%94%B0%E3%81%A1%E3%81%BE`)

        msg.send(`町田ちまのYutubeチャンネルです
        https://www.youtube.com/channel/UCo7TRj3cS-f_1D9ZDmuTsjw`)
    })
    robot.hear(/ジョー・カー|ジョー・力一/i, (msg) => {
        msg.send(`ジョー・力一の公式サイトです
        https://nijisanji.ichikara.co.jp/member/joe-rikiichi/`)

        msg.send(`ジョー・力一の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%82%B8%E3%83%A7%E3%83%BC%E3%83%BB%E5%8A%9B%E4%B8%80 `)

        msg.send(`ジョー・力一のYutubeチャンネルです
        https://www.youtube.com/channel/UChUJbHiTVeGrSkTdBzVfNCQ`)
    })
    robot.hear(/遠北千南/i, (msg) => {
        msg.send(`遠北千南の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Chinami-Achikita/`)

        msg.send(`遠北千南の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E9%81%A0%E5%8C%97%E5%8D%83%E5%8D%97`)

        msg.send(`遠北千南のYutubeチャンネルです
        https://www.youtube.com/channel/UCuz0vzQgC8LRdS6lVV0UkUg`)
    })
    robot.hear(/夢追翔|ゆめお|もやし/i, (msg) => {
        msg.send(`夢追翔の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Kakeru-Yumeoi/`)

        msg.send(`夢追翔の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%A4%A2%E8%BF%BD%E7%BF%94`)

        msg.send(`夢追翔のYutubeチャンネルです
        https://www.youtube.com/channel/UCTIE7LM5X15NVugV7Krp9Hw`)
    })
    robot.hear(/黒井しば|にじさんじの犬/i, (msg) => {
        msg.send(`黒井しばの公式サイトです
        https://www.youtube.com/channel/UCTIE7LM5X15NVugV7Krp9Hw`)

        msg.send(`黒井しばの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E9%BB%92%E4%BA%95%E3%81%97%E3%81%B0`)

        msg.send(`黒井しばのYutubeチャンネルです
        https://www.youtube.com/channel/UCmeyo5pRj_6PXG-CsGUuWWg`)
    })
    robot.hear(/矢車りね/i, (msg) => {
        msg.send(`矢車りねの公式サイトです
        https://nijisanji.ichikara.co.jp/member/rine-yaguruma/`)

        msg.send(`矢車りねの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E7%9F%A2%E8%BB%8A%E3%82%8A%E3%81%AD`)

        msg.send(`矢車りねのYutubeチャンネルです
        https://www.youtube.com/channel/UCvzVB-EYuHFXHZrObB8a_Og`)
    })
    robot.hear(/ベルモンド・バンデラス/i, (msg) => {
        msg.send(`の公式サイトです
        https://nijisanji.ichikara.co.jp/member/belmond-banderas/`)

        msg.send(`の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%83%99%E3%83%AB%E3%83%A2%E3%83%B3%E3%83%89%E3%83%BB%E3%83%90%E3%83%B3%E3%83%87%E3%83%A9%E3%82%B9`)

        msg.send(`のYutubeチャンネルです
        https://www.youtube.com/channel/UCbc8fwhdUNlqi-J99ISYu4A`)
    })
    //---------------------------------------------------------------------------------------------------------------

    // にじさんじゲーマーズ ----------------------------------------------------------------------------------------
    robot.hear(/叶|かなかな/i, (msg) => {
        msg.send(`叶の公式サイトです
            https://nijisanji.ichikara.co.jp/member/kanae/`)

        msg.send(`叶の非公式Wikiです
            https://wikiwiki.jp/nijisanji/%E5%8F%B6`)

        msg.send(`叶のYutubeチャンネルです
            https://www.youtube.com/channel/UCspv01oxUFf_MTSipURRhkA`)
    })
    robot.hear(/赤羽葉子|バネキ/i, (msg) => {
        msg.send(`赤羽葉子の公式サイトです
            https://nijisanji.ichikara.co.jp/member/youko-akabane/`)

        msg.send(`赤羽葉子の非公式Wikiです
            https://wikiwiki.jp/nijisanji/%E8%B5%A4%E7%BE%BD%E8%91%89%E5%AD%90`)

        msg.send(`赤羽葉子のYutubeチャンネルです
            https://www.youtube.com/channel/UCBi8YaVyZpiKWN3_Z0dCTfQ/`)
    })
    robot.hear(/笹木咲/i, (msg) => {
        msg.send(`笹木咲の公式サイトです
            https://nijisanji.ichikara.co.jp/member/Saku-Sasaki/`)

        msg.send(`笹木咲の非公式Wikiです
            https://wikiwiki.jp/nijisanji/%E7%AC%B9%E6%9C%A8%E5%92%B2`)

        msg.send(`笹木咲のYutubeチャンネルです
            https://www.youtube.com/channel/UCoztvTULBYd3WmStqYeoHcA`)
    })
    robot.hear(/本間ひまわり|ほんひま/i, (msg) => {
        msg.send(`本間ひまわりの公式サイトです
            https://nijisanji.ichikara.co.jp/member/himawari-honma/`)

        msg.send(`本間ひまわりの非公式Wikiです
            https://wikiwiki.jp/nijisanji/%E6%9C%AC%E9%96%93%E3%81%B2%E3%81%BE%E3%82%8F%E3%82%8A`)

        msg.send(`本間ひまわりのYutubeチャンネルです
            https://www.youtube.com/channel/UC0g1AE0DOjBYnLhkgoRWN1w`)
    })
    robot.hear(/魔界ノりりむ|りりむ/i, (msg) => {
        msg.send(`魔界ノりりむの公式サイトです
            https://nijisanji.ichikara.co.jp/member/Makaino-Ririmu/`)

        msg.send(`魔界ノりりむの非公式Wikiです
            https://wikiwiki.jp/nijisanji/%E9%AD%94%E7%95%8C%E3%83%8E%E3%82%8A%E3%82%8A%E3%82%80`)

        msg.send(`魔界ノりりむのYutubeチャンネルです
            https://www.youtube.com/channel/UC9EjSJ8pvxtvPdxLOElv73w`)
    })
    robot.hear(/葛葉/i, (msg) => {
        msg.send(`葛葉の公式サイトです
            https://nijisanji.ichikara.co.jp/member/kuzuha/`)

        msg.send(`葛葉の非公式Wikiです
            https://wikiwiki.jp/nijisanji/%E8%91%9B%E8%91%89`)

        msg.send(`葛葉のYutubeチャンネルです
            https://www.youtube.com/channel/UCSFCh5NL4qXrAy9u-u2lX3g`)
    })
    robot.hear(/椎名唯香|しいしい/i, (msg) => {
        msg.send(`椎名唯香の公式サイトです
            https://nijisanji.ichikara.co.jp/member/Yuika-Shiina/`)

        msg.send(`椎名唯香の非公式Wikiです
            https://wikiwiki.jp/nijisanji/%E6%A4%8E%E5%90%8D%E5%94%AF%E8%8F%AF`)

        msg.send(`椎名唯香のYutubeチャンネルです
            https://www.youtube.com/channel/UC_4tXjqecqox5Uc05ncxpxg`)
    })

    // 19年1～3月期生 -----------------------------------------------------------------
    robot.hear(/童田明治/i, (msg) => {
        msg.send(`童田明治の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Meiji-Warabeda/`)

        msg.send(`童田明治の非公式Wikiです
        https://nijisanji.ichikara.co.jp/member/Meiji-Warabeda/`)

        msg.send(`童田明治のYutubeチャンネルです
        https://www.youtube.com/channel/UCveZ9Ic1VtcXbsyaBgxPMvg`)
    })
    robot.hear(/夢月ロア/i, (msg) => {
        msg.send(`の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Roa-Yuzuki/`)

        msg.send(`の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%A4%A2%E6%9C%88%E3%83%AD%E3%82%A2`)

        msg.send(`のYutubeチャンネルです
        https://www.youtube.com/channel/UCCVwhI5trmaSxfcze_Ovzfw`)
    })
    robot.hear(/郡道美玲|先生/i, (msg) => {
        msg.send(`郡道美玲の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Mirei-Gundo/`)

        msg.send(`郡道美玲の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E9%83%A1%E9%81%93%E7%BE%8E%E7%8E%B2`)

        msg.send(`郡道美玲のYutubeチャンネルです
        https://www.youtube.com/channel/UCeShTCVgZyq2lsBW9QwIJcw`)
    })
    robot.hear(/小野町春香|若女将｜おのはる/i, (msg) => {
        msg.send(`小野町春香の公式サイトです
        https://nijisanji.ichikara.co.jp/member/haruka-onomachi/`)

        msg.send(`小野町春香の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%B0%8F%E9%87%8E%E7%94%BA%E6%98%A5%E9%A6%99`)

        msg.send(`小野町春香のYutubeチャンネルです
        https://www.youtube.com/channel/UCg63a3lk6PNeWhVvMRM_mrQ`)
    })
    robot.hear(/語部紡/i, (msg) => {
        msg.send(`語部紡の公式サイトです
        https://nijisanji.ichikara.co.jp/member/Tsumugu-Kataribe/`)

        msg.send(`語部紡の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E8%AA%9E%E9%83%A8%E7%B4%A1`)

        msg.send(`語部紡のYutubeチャンネルです
        https://www.youtube.com/channel/UCufQu4q65z63IgE4cfKs1BQ`)
    })
    robot.hear(/瀬戸美夜子|せとみや/i, (msg) => {
        msg.send(`瀬戸美夜子の公式サイトです
        https://nijisanji.ichikara.co.jp/member/miyako-seto/`)

        msg.send(`瀬戸美夜子の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E7%80%AC%E6%88%B8%E7%BE%8E%E5%A4%9C%E5%AD%90`)

        msg.send(`瀬戸美夜子のYutubeチャンネルです
        https://www.youtube.com/channel/UCHK5wkevfaGrPr7j3g56Jmw`)
    })
    robot.hear(/御伽原江良|江良ちゃん|エラちゃん|ギバラ/i, (msg) => {
        msg.send(`御伽原江良の公式サイトです
        https://nijisanji.ichikara.co.jp/member/era-otogibara/`)

        msg.send(`御伽原江良の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%BE%A1%E4%BC%BD%E5%8E%9F%E6%B1%9F%E8%89%AF`)

        msg.send(`御伽原江良のYutubeチャンネルです
        https://www.youtube.com/channel/UCwQ9Uv-m8xkE5PzRc7Bqx3Q`)
    })
    robot.hear(/戌亥とこ/i, (msg) => {
        msg.send(`戌亥とこの公式サイトです
        https://nijisanji.ichikara.co.jp/member/toko-inui/`)

        msg.send(`戌亥とこの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E6%88%8C%E4%BA%A5%E3%81%A8%E3%81%93`)

        msg.send(`戌亥とこのYutubeチャンネルです
        https://www.youtube.com/channel/UCXRlIK3Cw_TJIQC5kSJJQMg`)
    })
    robot.hear(/アンジュ・カトリーナ/i, (msg) => {
        msg.send(`アンジュ・カトリーナの公式サイトです
        https://nijisanji.ichikara.co.jp/member/ange-katrina/`)

        msg.send(`アンジュ・カトリーナの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%82%A2%E3%83%B3%E3%82%B8%E3%83%A5%E3%83%BB%E3%82%AB%E3%83%88%E3%83%AA%E3%83%BC%E3%83%8A`)

        msg.send(`アンジュ・カトリーナのYutubeチャンネルです
        https://www.youtube.com/channel/UCHVXbQzkl3rDfsXWo8xi2qw`)
    })
    robot.hear(/リゼ・ヘルエスタ/i, (msg) => {
        msg.send(`リゼヘルエスタの公式サイトです
        https://nijisanji.ichikara.co.jp/member/lize-helesta/`)

        msg.send(`リゼヘルエスタの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%83%AA%E3%82%BC%E3%83%BB%E3%83%98%E3%83%AB%E3%82%A8%E3%82%B9%E3%82%BF`)

        msg.send(`リゼヘルエスタのYutubeチャンネルです
        https://www.youtube.com/channel/UCZ1xuCK1kNmn5RzPYIZop3w`)
    })
    //-------------------------------------------------------------------------------------------------------

    // 19年4〜6月期生　--------------------------------------------------------------------------------------------
    robot.hear(/三枝明那|あっきーな/i, (msg) => {
        msg.send(`三枝明那の公式サイトです
        https://nijisanji.ichikara.co.jp/member/akina-saegusa/`)

        msg.send(`三枝明那の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E4%B8%89%E6%9E%9D%E6%98%8E%E9%82%A3`)

        msg.send(`三枝明那のYutubeチャンネルです
        https://www.youtube.com/channel/UCNW1Ex0r6HsWRD4LCtPwvoQ`)
    })
    robot.hear(/愛園愛美/i, (msg) => {
        msg.send(`愛園愛美の公式サイトです
        https://nijisanji.ichikara.co.jp/member/manami-aizono/`)

        msg.send(`愛園愛美の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E6%84%9B%E5%9C%92%E6%84%9B%E7%BE%8E`)

        msg.send(`愛園愛美のYutubeチャンネルです
        https://www.youtube.com/channel/UC0WwEfE-jOM2rzjpdfhTzZA`)
    })
    robot.hear(/鈴原るる/i, (msg) => {
        msg.send(`鈴原るるの公式サイトです
        https://nijisanji.ichikara.co.jp/member/manami-aizono/`)

        msg.send(`鈴原るるの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E9%88%B4%E5%8E%9F%E3%82%8B%E3%82%8B`)

        msg.send(`鈴原るるのYutubeチャンネルです
        https://www.youtube.com/channel/UC_a1ZYZ8ZTXpjg9xUY9sj8w`)
    })
    robot.hear(/雪城眞広/i, (msg) => {
        msg.send(`雪城眞広の公式サイトです
        https://nijisanji.ichikara.co.jp/member/mahiro-yukishiro/`)

        msg.send(`雪城眞広の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E9%9B%AA%E5%9F%8E%E7%9C%9E%E5%B0%8B`)

        msg.send(`雪城眞広のYutubeチャンネルです
        https://www.youtube.com/channel/UCHX7YpFG8rVwhsHCx34xt7w`)
    })
    robot.hear(/エクス・アルビオ|英雄/i, (msg) => {
        msg.send(`エクス・アルビオの公式サイトです
        https://nijisanji.ichikara.co.jp/member/ex-albio/`)

        msg.send(`エクス・アルビオの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%BB%E3%82%A2%E3%83%AB%E3%83%93%E3%82%AA`)

        msg.send(`エクス・アルビオのYutubeチャンネルです
        https://www.youtube.com/channel/UCIytNcoz4pWzXfLda0DoULQ`)
    })
    robot.hear(/レヴィ・エリファ/i, (msg) => {
        msg.send(`レヴィ・エリファの公式サイトです
        https://nijisanji.ichikara.co.jp/member/ex-albio/`)

        msg.send(`レヴィ・エリファの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%83%AC%E3%83%B4%E3%82%A3%E3%83%BB%E3%82%A8%E3%83%AA%E3%83%95%E3%82%A1`)

        msg.send(`レヴィ・エリファのYutubeチャンネルです
        https://www.youtube.com/channel/UCtnO2N4kPTXmyvedjGWdx3Q`)
    })
    robot.hear(/葉山舞鈴/i, (msg) => {
        msg.send(`葉山舞鈴の公式サイトです
        https://nijisanji.ichikara.co.jp/member/marin-hayama/`)

        msg.send(`葉山舞鈴の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E8%91%89%E5%B1%B1%E8%88%9E%E9%88%B4`)

        msg.send(`葉山舞鈴のYutubeチャンネルです
        https://www.youtube.com/channel/UCfipDDn7wY-C-SoUChgxCQQ`)
    })
    robot.hear(/ニュイ・ソシエール/i, (msg) => {
        msg.send(`ニュイ・ソシエールの公式サイトです
        https://nijisanji.ichikara.co.jp/member/nui-sociere/`)

        msg.send(`ニュイ・ソシエールの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%83%8B%E3%83%A5%E3%82%A4%E3%83%BB%E3%82%BD%E3%82%B7%E3%82%A8%E3%83%BC%E3%83%AB`)

        msg.send(`ニュイ・ソシエールのYutubeチャンネルです
        https://www.youtube.com/channel/UCUc8GZfFxtmk7ZwSO7ccQ0g`)
    })
    //----------------------------------------------------------------------------------------------

    //　19年7～9月期生 ------------------------------------------------------------------------------------------
    robot.hear(/葉加瀬冬雪/i, (msg) => {
        msg.send(`葉加瀬冬雪の公式サイトです
        https://nijisanji.ichikara.co.jp/member/fuyuki-hakase/`)

        msg.send(`葉加瀬冬雪の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E8%91%89%E5%8A%A0%E7%80%AC%E5%86%AC%E9%9B%AA`)

        msg.send(`葉加瀬冬雪のYutubeチャンネルです
        https://www.youtube.com/channel/UCGYAYLDE7TZiiC8U6teciDQ`)
    })
    robot.hear(/加賀美ハヤト|社長/i, (msg) => {
        msg.send(`加賀美ハヤトの公式サイトです
        https://nijisanji.ichikara.co.jp/member/hayato-kagami/`)

        msg.send(`加賀美ハヤトの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%8A%A0%E8%B3%80%E7%BE%8E%E3%83%8F%E3%83%A4%E3%83%88`)

        msg.send(`加賀美ハヤトのYutubeチャンネルです
        https://www.youtube.com/channel/UCmovZ2th3Sqpd00F5RdeigQ`)
    })
    robot.hear(/夜見れな/i, (msg) => {
        msg.send(`夜見れなの公式サイトです
        https://nijisanji.ichikara.co.jp/member/rena-yorumi/`)

        msg.send(`夜見れなの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%A4%9C%E8%A6%8B%E3%82%8C%E3%81%AA`)

        msg.send(`夜見れなのYutubeチャンネルです
        https://www.youtube.com/channel/UCL34fAoFim9oHLbVzMKFavQ`)
    })
    robot.hear(/黛灰|まゆゆ/i, (msg) => {
        msg.send(`黛灰の公式サイトです
        https://nijisanji.ichikara.co.jp/member/kai-mayuzumi/`)

        msg.send(`黛灰の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E9%BB%9B%E7%81%B0`)

        msg.send(`黛灰のYutubeチャンネルです
        https://www.youtube.com/channel/UCb5JxV6vKlYVknoJB8TnyYg`)
    })
    robot.hear(/アルスアルマル | まるまる/i, (msg) => {
        msg.send(`アルスアルマルの公式サイトです
        https://nijisanji.ichikara.co.jp/member/ars-almal/`)

        msg.send(`アルスアルマルの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%82%A2%E3%83%AB%E3%82%B9%E3%83%BB%E3%82%A2%E3%83%AB%E3%83%9E%E3%83%AB`)

        msg.send(`アルスアルマルのYutubeチャンネルです
        https://www.youtube.com/channel/UCdpUojq0KWZCN9bxXnZwz5w`)
    })
    robot.hear(/相羽ういは/i, (msg) => {
        msg.send(`相羽ういはの公式サイトです
        https://nijisanji.ichikara.co.jp/member/uiha-aiba/`)

        msg.send(`相羽ういはの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E7%9B%B8%E7%BE%BD%E3%81%86%E3%81%84%E3%81%AF`)

        msg.send(`相羽ういはのYutubeチャンネルです
        https://www.youtube.com/channel/UCnRQYHTnRLSF0cLJwMnedCg`)
    })
    robot.hear(/天宮こころ/i, (msg) => {
        msg.send(`天宮こころの公式サイトです
        https://nijisanji.ichikara.co.jp/member/kokoro-amamiya/`)

        msg.send(`天宮こころの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%A4%A9%E5%AE%AE%E3%81%93%E3%81%93%E3%82%8D`)

        msg.send(`天宮こころのYutubeチャンネルです
        https://www.youtube.com/channel/UCkIimWZ9gBJRamKF0rmPU8w`)
    })
    robot.hear(/エリー・コニファー/i, (msg) => {
        msg.send(`エリー・コニファーの公式サイトです
        https://nijisanji.ichikara.co.jp/member/eli-conifer/`)

        msg.send(`エリー・コニファーの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%82%A8%E3%83%AA%E3%83%BC%E3%83%BB%E3%82%B3%E3%83%8B%E3%83%95%E3%82%A1%E3%83%BC`)

        msg.send(`エリー・コニファーのYutubeチャンネルです
        https://www.youtube.com/channel/UCIG9rDtgR45VCZmYnd-4DUw`)
    })
    robot.hear(/早瀬走|ランねーちゃん|オカン|サトシ/i, (msg) => {
        msg.send(`早瀬走の公式サイトです
        https://nijisanji.ichikara.co.jp/member/sou-hayase/`)

        msg.send(`早瀬走の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E6%97%A9%E7%80%AC%E8%B5%B0`)

        msg.send(`早瀬走のYutubeチャンネルです
        https://www.youtube.com/channel/UC2OacIzd2UxGHRGhdHl1Rhw`)
    })
    robot.hear(/健屋花那/i, (msg) => {
        msg.send(`健屋花那の公式サイトです
        https://nijisanji.ichikara.co.jp/member/kana-sukoya/`)

        msg.send(`健屋花那の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%81%A5%E5%B1%8B%E8%8A%B1%E9%82%A3`)

        msg.send(`健屋花那のYutubeチャンネルです
        https://www.youtube.com/channel/UC8C1LLhBhf_E2IBPLSDJXlQ`)
    })
    robot.hear(/シェリン・バーガンディ/i, (msg) => {
        msg.send(`シェリン・バーガンディの公式サイトです
        https://nijisanji.ichikara.co.jp/member/shellin-burgundy/`)

        msg.send(`シェリン・バーガンディの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%82%B7%E3%82%A7%E3%83%AA%E3%83%B3%E3%83%BB%E3%83%90%E3%83%BC%E3%82%AC%E3%83%B3%E3%83%87%E3%82%A3`)

        msg.send(`シェリン・バーガンディのYutubeチャンネルです
        https://www.youtube.com/channel/UCHBhnG2G-qN0JrrWmMO2FTA`)
    })
    //-------------------------------------------------------------------------------------------------

    //　19年10～12月期生 --------------------------------------------------------------------------------------
    robot.hear(/フミ/i, (msg) => {
        msg.send(`フミの公式サイトです
        https://nijisanji.ichikara.co.jp/member/fumi/`)

        msg.send(`フミの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%83%95%E3%83%9F`)

        msg.send(`フミのYutubeチャンネルです
        https://www.youtube.com/channel/UCwrjITPwG4q71HzihV2C7Nw`)
    })
    robot.hear(/星川サラ/i, (msg) => {
        msg.send(`星川サラの公式サイトです
        https://nijisanji.ichikara.co.jp/member/sara-hoshikawa/`)

        msg.send(`星川サラの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E6%98%9F%E5%B7%9D%E3%82%B5%E3%83%A9`)

        msg.send(`星川サラのYutubeチャンネルです
        https://www.youtube.com/channel/UC9V3Y3_uzU5e-usObb6IE1w`)
    })
    robot.hear(/山神カルタ/i, (msg) => {
        msg.send(`山神カルタの公式サイトです
        https://nijisanji.ichikara.co.jp/member/karuta-yamagami/`)

        msg.send(`山神カルタの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%B1%B1%E7%A5%9E%E3%82%AB%E3%83%AB%E3%82%BF`)

        msg.send(`山神カルタのYutubeチャンネルです
        https://www.youtube.com/channel/UCllKI7VjyANuS1RXatizfLQ`)
    })
    robot.hear(/えま☆おうがすと/i, (msg) => {
        msg.send(`えま☆おうがすとの公式サイトです
        https://nijisanji.ichikara.co.jp/member/emma-august/`)

        msg.send(`えま☆おうがすとの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%81%88%E3%81%BE%E2%98%85%E3%81%8A%E3%81%86%E3%81%8C%E3%81%99%E3%81%A8`)

        msg.send(`えま☆おうがすとのYutubeチャンネルです
        https://www.youtube.com/channel/UCl1oLKcAq93p-pwKfDGhiYQ`)
    })
    robot.hear(/ルイス・キャミー/i, (msg) => {
        msg.send(`ルイス・キャミーの公式サイトです
        https://nijisanji.ichikara.co.jp/member/luis-cammy/`)

        msg.send(`ルイス・キャミーの非公式Wikiです
        https://nijisanji.ichikara.co.jp/member/luis-cammy/`)

        msg.send(`ルイス・キャミーのYutubeチャンネルです
        https://www.youtube.com/channel/UCb6ObE-XGCctO3WrjRZC-cw`)
    })
    robot.hear(/魔使マオ/i, (msg) => {
        msg.send(`魔使マオの公式サイトです
        https://nijisanji.ichikara.co.jp/member/mao-matsukai/`)

        msg.send(`魔使マオの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E4%B8%8D%E7%A0%B4%E6%B9%8A`)

        msg.send(`魔使マオのYutubeチャンネルです
        https://www.youtube.com/channel/UCerkculBD7YLc_vOGrF7tKg`)
    })
    robot.hear(/不破湊|ホスト/i, (msg) => {
        msg.send(`不破湊の公式サイトです
        https://nijisanji.ichikara.co.jp/member/minato-fuwa/`)

        msg.send(`不破湊の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E4%B8%8D%E7%A0%B4%E6%B9%8A`)

        msg.send(`不破湊のYutubeチャンネルです
        https://www.youtube.com/channel/UC6wvdADTJ88OfIbJYIpAaDA`)
    })
    robot.hear(/白雪巴/i, (msg) => {
        msg.send(`白雪巴の公式サイトです
        https://nijisanji.ichikara.co.jp/member/tomoe-shirayuki/`)

        msg.send(`白雪巴の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E7%99%BD%E9%9B%AA%E5%B7%B4`)

        msg.send(`白雪巴のYutubeチャンネルです
        https://www.youtube.com/channel/UCuvk5PilcvDECU7dDZhQiEw`)
    })
    robot.hear(/グウェル・オス・ガール|タモリ/i, (msg) => {
        msg.send(`グウェル・オス・ガールの公式サイトです
        https://nijisanji.ichikara.co.jp/member/gwelu-os-gar/`)

        msg.send(`グウェル・オス・ガールの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%82%B0%E3%82%A6%E3%82%A7%E3%83%AB%E3%83%BB%E3%82%AA%E3%82%B9%E3%83%BB%E3%82%AC%E3%83%BC%E3%83%AB`)

        msg.send(`グウェル・オス・ガールのYutubeチャンネルです
        https://www.youtube.com/channel/UC1QgXt46-GEvtNjEC1paHnw`)
    })
    robot.hear(/ましろ/i, (msg) => {
        msg.send(`ましろの公式サイトです
        https://nijisanji.ichikara.co.jp/member/mashiro/`)

        msg.send(`ましろの非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E3%81%BE%E3%81%97%E3%82%8D`)

        msg.send(`ましろのYutubeチャンネルです
        https://www.youtube.com/channel/UCfki3lMEF6SGBFiFfo9kvUA`)
    })
    robot.hear(/奈羅花/i, (msg) => {
        msg.send(`奈羅花の公式サイトです
        https://nijisanji.ichikara.co.jp/member/naraka/`)

        msg.send(`奈羅花の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E5%A5%88%E7%BE%85%E8%8A%B1`)

        msg.send(`奈羅花のYutubeチャンネルです
        https://www.youtube.com/channel/UC-o-E6I3IC2q8sAoAuM6Umg`)
    })
    robot.hear(/来栖夏芽/i, (msg) => {
        msg.send(`来栖夏芽の公式サイトです
        https://nijisanji.ichikara.co.jp/member/natsume-kurusu/`)

        msg.send(`来栖夏芽の非公式Wikiです
        https://wikiwiki.jp/nijisanji/%E6%9D%A5%E6%A0%96%E5%A4%8F%E8%8A%BD`)

        msg.send(`来栖夏芽のYutubeチャンネルです
        https://www.youtube.com/channel/UCRcLAVTbmx2-iNcXSsupdNA`)
    })
    robot.hear(/あああ/i, (msg) => {
        msg.send(`https://www.youtube.com/watch?v=bxrYgbCZWDs`)

 
    })
    //-------------------------------------------------------------------------------

};


