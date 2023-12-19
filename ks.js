var dataSource = {
    author: {
        path: "https://laishengzhen.github.io/img/",
        picFiles:["ljh.jpg","zzx.jpg","lsz.jpg","zrj.jpg"],
        name:["李健宏老师","张梓鑫","赖盛桢","张荣军"]
    },
    mp3Files: {
        path: "https://jxzy-dmxy.jxstnu.edu.cn/",
        fileNames: ["cs1.mp3"],
        title: [
            "前言",
            "第一章：介绍",
            "1.1 Turing model(图灵模型)",
            "1.1.1 Data processor(站在图灵机的角度看看数据处理器)",
            "1.1.2 Programmable data processors(可以编程序的数据处理器)",
            "1.1.3 The universal Turing machine(通用的图灵机)",
            "1.2 Von Neumann model(冯诺依曼模型)",
            "1.2.1 Four subsystems(四个子系统)",
            "1.2.2 The stored program concept(一个重要概念：程序可以存储)",
            "1.2.3 Sequential execution of instructions(指令的顺序执行)",
            "1.3 Computer component(计算机组成部件)",
            "1.3.1 Computer hardware(计算机硬件)",
            "1.3.2 Data(数据)",
            "1.3.3 Computer software(计算机软件)",
            "1.4 History(计算机的历史)",
            "1.5 Computer science as a discipline(计算机科学作为一个学科)",
            "1.6.2 Part II Computer hardware",
            "1.6.4 Part IV Data organization and abstarction(数据的组织和抽象)",
            "1.6.5 Part V Advanced topic(一些高级话题)",
            "1.6.6 Part VI Social media and social issues(社交媒体和社会问题)"
        ],
        time: [[1, 696], [696, 1072], [1072, 1385], [1385, 1915], [1915, 2582], [2582, 2832], [2832, 2974], [2974, 3642], [3642, 3912], [3912, 4321], [4321, 4400], [4400, 4490], [4490, 5168], [5168, 6756], [6756, 9668], [9668, 10268], [10268, 10674], [10674, 10954], [10954, 11184], [11184, 11274]]
    },
    mp4Files: {
        path: "https://jxzy-dmxy.jxstnu.edu.cn/tedVideos/",
        fileNames: ["v02004040000bpa9p3egncoejcefuv4g.mp4", "v02004090000brsni7sd1drb1sobjjl0.mp4", "v020040a0000bqvdpsl7gl1ko381hedg.mp4", "v020040c0000bti2etclja68ljgh9o30.mp4", "v02004140000bojvtckr08m3ineu8o90.mp4", "v02004170000bnabtdr6j2ql9flksu30.mp4", "v020041a0000bq8kab5p06vufte9gk5g.mp4", "v020041e0000bnabvqom4ciq1tkrpgu0.mp4", "v02004220000bnk9nkgm4cioajs247ig.mp4", "v02004250000bmnsaj9dli3rj0fo4v7g.mp4", "v020042c0000bqa0eeij2bouk4hiuitg.mp4", "v020042f0000bsbsuceg08joaideip6g.mp4", "v02004390000bjus27g697atl8skbmng.mp4", "v02004440000bsv7mdjlvmvitaj7f9g0.mp4", "v02004470000bphs39o697ap32u4ktgg.mp4", "v020044f0000bru9bgjc86dmn38v38s0.mp4", "v02004590000br6kb6k81ukk6s5n7n00.mp4", "v020045a0000bmqgqpdds13crlsmbibg.mp4", "v02004710000brm74cvibktq7tfr4m70.mp4", "v02004770000bn6keiaepr1cf84pn8m0.mp4", "v02004770000bpkqbkk1n3e10rmkd9og.mp4", "v02004810000bpblkkq7u0r5d52f8td0.mp4", "v02004830000bsbb9p2r56qcebd05v6g.mp4", "v02004910000bkemdd27u0r2cv3gvnq0.mp4", "v02004930000bpchrbs1n3e6vfb91j5g.mp4", "v020049f0000brm73vtjfrmhhdfcu62g.mp4", "v02004a40000bproefir863oaub47slg.mp4", "v02004a40000bproicl7gl1h25fgjoeg.mp4", "v02004a50000bpmepbubn5v2f7sn39og.mp4", "v02004a80000bn2mnkonrm1ii1qe45bg.mp4", "v02004ac0000bt20l8lo827ubql9vlt0.mp4", "v02004b40000bnac1ktjfrmsnk5rbis0.mp4", "v02004b40000bo039k481ukr122vand0.mp4", "v02004b70000bqud520697aqhcmfabr0.mp4", "v02004b70000bqud654qs4skvnoev5k0.mp4", "v02004c40000bnk9mra0ifkspps8uu80.mp4", "v02004c50000bpmejdm4tqbt4g4qiis0.mp4", "v02004c70000boqg8q7eqk81somj37fg.mp4", "v02004d00000bmt55akd1dr6lo7cgo40.mp4", "v02004d90000bjam8rg7q8i1sd06mda0.mp4", "v02004e10000blqa44o858lv6e4b9kpg.mp4", "v02004e20000bpmegl6vld7bj4d1qdug.mp4", "v02004ed0000bkbdi5aikatv305g7900.mp4", "v02004f40000bpgcqf51mikbqkhojceg.mp4", "v02004f50000bo4unvc1n3e1folem2r0.mp4", "v02004f50000bs6m8l0ar5621po9otig.mp4", "v02004g10000c5rrhhrc77u1fhfj73lg.mp4", "v02004g10000c5rrikbc77u4rdiknfog.mp4", "v02004g10000c5rt0erc77ud097i9ka0.mp4", "v02004g10000c5sagp3c77uek0luucag.mp4", "v02004g10000c5saktjc77u8lgv86de0.mp4", "v02004g10000c5sbrurc77ubkoc49260.mp4", "v02004g10000c5sgd13c77u7jlevn55g.mp4", "v02004g10000c62f0njc77u4tq54oqog.mp4", "v02004g10000c62uptrc77u43f69kg8g.mp4", "v02004g10000c62uuljc77u0gu6e3kvg.mp4", "v02004g10000c62uv03c77u9fhlj12gg.mp4", "v02004g10000c62v3brc77ue7t1llv50.mp4", "v02004g10000c62vdgrc77u5gmkj5s50.mp4", "v02004g10000c62vefbc77u27fie94j0.mp4", "v02004g10000c62vh53c77u7s0g8bpeg.mp4", "v02004g10000c62vhdjc77ucs4ub13h0.mp4", "v02004g10000c62vhrbc77uaqj1qbmbg.mp4", "v02004g10000c62vkvjc77u6s0801teg.mp4", "v02004g10000c62vl6bc77udn5psmn3g.mp4", "v02004g10000c62vm0bc77u1cuqnk8e0.mp4", "v02004g10000c62vmp3c77u9oiijo690.mp4", "v02004g10000c62vnfbc77ub99epl7dg.mp4", "v02004g10000c62vo2rc77u1nrn8lgbg.mp4", "v02004g10000c62vojjc77ucbokpae40.mp4", "v02004g10000c62vpf3c77u7or2pecqg.mp4", "v02004g10000c62vrhrc77uckgmm92p0.mp4", "v02004g10000c62vsljc77u9oiijujh0.mp4", "v02004g10000c630ls3c77ub8bf0brp0.mp4", "v02004g10000c630rfjc77u2pkcl6kr0.mp4", "v02004g10000c630sa3c77ufpliulk40.mp4", "v02004g10000c630slrc77ubsack6ncg.mp4", "v02004g10000c630srrc77ubsack6tqg.mp4", "v02004g10000c6317h3c77ub99eqonu0.mp4", "v02004g10000c631tsbc77u6etsudo2g.mp4", "v02004g10000c6321ajc77u6etsuhf10.mp4", "v02004g10000c648i43c77u2u7qb50e0.mp4", "v02004g10000c648jabc77ubsadrmmdg.mp4", "v02004g10000c64983jc77u0j3v5vfeg.mp4", "v02004g10000c649rcrc77u6pkh35ft0.mp4", "v02004g10000c64beprc77u7ulu7u3l0.mp4", "v02004g10000c64bf53c77u43f7mrha0.mp4", "v02004g10000c64bfk3c77u96irv78b0.mp4", "v02004g10000c64c3h3c77u74i8i5390.mp4", "v02004g10000c64ceb3c77u27fjs0tg0.mp4", "v02004g10000c64dvk3c77u40bkavjm0.mp4", "v02004g10000c64e1fjc77u1mcul10t0.mp4", "v02004g10000c64e1o3c77u0k67o8fo0.mp4", "v02004g10000c64e29bc77u08to73glg.mp4", "v02004g10000c64ebnjc77u0u6tin2s0.mp4", "v02004g10000c64ecsjc77u0fsou1200.mp4", "v02004g10000c64ed3rc77u7g8l1iqug.mp4", "v02004g10000c64eejbc77u0u6tiqfdg.mp4", "v02004g10000c64em4bc77u6s09gdvcg.mp4", "v02004g10000c64emfjc77udflk91trg.mp4", "v02004g10000c65id1bc77u0u6unbvug.mp4", "v02004g10000cdoj7ijc77u0q6r7n770.mp4", "v0201ag10000caikc13c77udap1dkdb0.mp4", "v030041b0000bti2edngvt0hel3lsi4g.mp4", "v03004330000bthktosocj9e1v35br7g.mp4", "v03004350000bt20q1ugoh6r1clid6pg.mp4", "v03004460000bka2l6v298s08t0hphhg.mp4", "v03004640000bkpuvncif32jk9ngddig.mp4", "v03004680000bt20mqnosmd9g3h47s5g.mp4", "v03004680000bt20mqnosmd9g3h47s6g.mp4", "v03004840000bsu95l75v4d5074lsmbg.mp4", "v03004910000bthl32n0l8p81ftmoggg.mp4", "v03004ac0000blvk5nlm8tc7dcuu06ag.mp4", "v03004bc0000bsvn9t4ev9gkf10h1880.mp4", "v03004d00000bthlir3l6nk41dnmaog0.mp4", "v03004d60000bt20j7df254l6aff4t6g.mp4", "v03004d70000bthlcn7758ubifbbdbl0.mp4", "v03004f50000bk9dkvqbr0fl17dvm6rg.mp4"]
    }
};