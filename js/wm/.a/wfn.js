var abgd = {
    t_roots: "i l c h x t y p a j w o g z b f s m n e r q v k d u #",
    t_vals: "0 1 2 3 6 9 18 4 5 7 8 10 11 19 20 12 15 21 24 13 14 16 22 17 23 25 26",
    t_symbs: "☸ ☯ ☷ ☶ ☴ ☰ ☊ ☋ ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ♄ ☿ ☉ ♃ ♀ ☽ ♂ ⨁",
    t_names: "Tao De Fire Water Air Earth Caput Cauda " +
            "Aries Taurus Gemini Cancer Leo Virgo Librae Scorpius Sagittarius Capricornus Aquarius " +
            "Saturnus Mercurius Sol Jupiter Venus Luna Mars Terra",
    w_teq: 'k x e . j a c o b . . # l . q s y z g p h b r n f . t i u m v d .',
    t_hoggvas: "э ω I я з а å м ξ г к т в у щ б о ρ ш л c ё р ж й п х е и w д θ н э ы å ф ˉ ˉ ч ⁝ ⁅ ⁆ ⁝ƕ ⁝|⁝ ео ÿ",
    s_hoggvas: "⅄ ƕ ɾ q ʌ p չ ↷ m ϙ I C ʙ ʜ O Ƒ ɯ ϵ ʞ d ψ Ξ ʀ Պ b Ʋ ⊥ է T Ɣ Δ փ n Y Ӻ = ϟ ˉ ˉ փ ⁝ ⁅ ⁆ ⁝ƕ ⁝|⁝ Ϣ Ŧ", //ꙈꙉƕʎըϯʞѦТɭ
    c_hoggvas: "э ы ь я з а ъ м ю г к т в у щ б о Р ш л с ё р ж й п х е и В д ц н Э Ы Ъ ф – - ч _ ( ) ? ! ео ии",
    l_hoggvas: "e y I q z a A m X g k t b u C b o R S l s E r J j p h e i w d T n E Y $ f – - Z _ ( ) ? ! eo ии",
    v_hoggvas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                1*12, 2*12, 3*12, 4*12, 5*12, 6*12, 7*12, 8*12, 9*12, 10*12, 11*12,
                1*144, 2*144, 3*144, 4*144, 5*144, 6*144, 7*144, 8*144, 9*144, 10*144, 11*144,
                1, 2, 3, 4*144*2, 0, 0, 10*144, 0, 0, 0, 0, 0, 936, 2016],
    g_hoggvas: [
        "00 2+01 4+02 2-20 2+01", //wati 18
        "02 2+02 2+12 4-23 2+30", //eroth 18
        "20 1+20 3+01 1-20 4+02 1+01", //1эер 22
        "20 1+10 1+12 1+03 2+01 2-20 4+02 1+01", //яян30
        "03 1+20 2+21 2+03 1+02", //Зера
        "04 1+01 4+20 2+01 1+03 1+12 1+10",//Акюа
        "02 2+12 3-01 2+12", //ъьъ14
        "04 4+21 4+02", //мокь 10
        "00 4+02 3-20 4+01 1-30 1-10 4+02 2-01 4+20", //юерь34
        "42 2+20 1+10 1+30 1+21 2+01 1+03 1+12", //га 30
        "02 4+02 2+01 1+03 1+21 1+10", //кымп
        ////
        "40 1+12 1+30 1+10 4+20 1+01 1+21 1+03", //тВъвв30
        "40 1+10 1+12 1+03 1+12 1+03 4+02", //въжа
        "00 4+02 2-20 4+01 2-20 4+02", //уюсъ
        "20 2+12 2+03 2+21 2+30", //щит
        "00 4+01 4+02 2-20 3-10 3+01", //бйер
        "00 1+02 1+03 1+21 1+03 1+21 1+20 4-12 1+20 4-01 1+02", //о
        "40 2+10 2+03 2+01 2-30 1+01", //РуВ
        "00 2+03 2+12 4-21 4+02",//шелй
        "40 1+10 4+02 2+10 1+30 1+21 1+01",//лъу
        "00 2+03 2+02 4-20 1+03 1+21",//сэлй
        "00 4+01 2-02 4+10 2-02 4+10",//ёж
        ////
        "04 4+20 2+01 1+03 1+12 1+10 1-01 2+03",//реед
        "04 2+21 2+20 4-02 1+21 1+03",//jeoz
        "00 1+01 4+02 2+01 1+21 1+30 1+10",//yar
        "00 4+02 4+01 4+20",//пеюц
        "03 1+03 1-01 4+20 4-02 1-01 1+21",//хуВ
        "00 4+02 4+01 2-20 1-10 3+10",//egx
        "00 4+01 2-10 4+02",//iasn
        "04 3+21 1+30 1+12 3+03",//Вян
        "03 1+02 4+01 1+20 1+30 1+20 1+30 1+12 1+02 1+12",//дыъ
        "04 2+20 4+01 2+20 2-10 4+02",//цэгх
        "04 4+20 4+01 4+02",//на
        ////
        // Э Ы Ъ ф – - ч _ ( ) ? ! ео
        "", "", "",
        "00 2+02 4+01 2+02",//affa
        "", "", "", "",  "", "", "", "",
        "44 4+10 4+20 2-02 2+01 1+20 1-03 1+01 2+20"//eoh
    ]
    // Уо Эр Ье Яа Зо Ак Ъь Ме Юэ Га Кw Тw Въ Ую Щь Бй Оо
    // Ру Ше Лэ Се Ёж Ре Же Йа Пи Ху Ее Ии Wя Дw Цу На
};

function short_trigr(text) {
    let t = trigr(text);
    let ar0 = []
    for (let i=0;i<t.words.length;i++) {
        let g = trigr_beautify(t.gemas[i].toString(3));
        ar0.push(`( ${t.words[i]}, ${t.gemas[i]}, ${g} )`); //formatted string "" (word, gematria, trigram) ""
    }
    return ar0.join(", ");

}

function trigr_sentences(text) {
    let sa = text.split("~"); //text.match(/\(?[^\:\;\,\.\?\!]+[\:\;\,\.!\?]\)?/g); //sentences array
    let asg = []; //array of sentences by gematria
    for(let i=0;i<sa.length;i++) {
        let gem = trigem(sa[i]);
        if (typeof(asg[gem]) == 'undefined'){
            asg[gem] = [sa[i]];
        } else {
            asg[gem].push(sa[i]);
        }
    }
    return asg;
}

function trigem(word) {
    let tg = {r:abgd.t_roots.split(" "), v: abgd.t_vals.split(" ")};
    let wd = word.split("");
    let ret = 0;
    for (let i=0;i<wd.length;i++) {
        if(tg.r.indexOf(wd[i]) > -1) {
            ret += parseInt(tg.v[tg.r.indexOf(wd[i])]);
        }
    }
    return ret;
}

function trigr(text) {
    // LOOKUP: http://www.nltk.org/
    // https://ru.wikipedia.org/wiki/Гексаграмма_(И_цзин)
    let tg = {r:abgd.t_roots.split(" "), v: abgd.t_vals.split(" ")};
    text2 = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " "); //remove punctuation and extra spaces
    let tar = text2.toLowerCase().split(" ");
    let ret = {words:[], gemas:[], letters:{}, total:0, wtot:[], text2: text2};
    let gem = 0;
    for (let i=0;i<tar.length;i++) {
        if (!isNaN(tar[i])) { //if we have plain number
            gem = parseInt(tar[i]);
            ret.words.push(tar[i]);
        } else { //if we have a word
            if (ret.words.indexOf(tar[i])==-1) { //if this word is seen for the first time
                ret.words.push(tar[i]);
                gem = 0;
                let word = tar[i].split("");
                for (let j=0;j<word.length;j++) {
                    let index = tg.r.indexOf(word[j]);
                    if(index > -1) {
                        gem += parseInt(tg.v[index]);
                        if (typeof(ret.letters[tg.r[index]]) == "undefined"){ret.letters[tg.r[index]] = 0}
                        ret.letters[tg.r[index]] += 1;
                        //but the numbers won't be counted
                    }
                }
                ret.gemas.push(gem);
            } //no need to work on already done word
        }
        ret.total += gem;
        if (typeof(ret.wtot[gem]) == "undefined") { //here we save the word that has some gematria in a list by gematria
            ret.wtot[gem] = [tar[i]];
        }else{
            if (ret.wtot[gem].indexOf(tar[i]) == -1) {
                ret.wtot[gem].push(tar[i]);
            }
        }

    }
    return ret;
}

function chunk(arr, n) {
    return arr.reduce(function(p, cur, i) {
        (p[i/n|0] = p[i/n|0] || []).push(cur);
        return p;
    },[]);
}

function trigr_beautify (tristr) {
    //return tristr;

    var tval = parseInt(tristr, 3);
    var sval = tval.toString(3);
    if (tristr != sval) { return NaN }
    //version of padding
    //https://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
    if (tristr.length % 3 != 0){
        add = 3 - (tristr.length % 3);
        for (i=0;i<add;i++){tristr = "0" + tristr}
    }
    var p = tristr.split(""), ret="";
    var trigr = "○┃╏".split("");//"∗ ∙ ∘".split(" ")
    for (let i=0;i<p.length;i++){
        switch(p[i]){
            case "0":
                ret += trigr[0];
                break;
            case "1":
                ret += trigr[1];
                break;
            case "2":
                ret += trigr[2];
                break;
        }
    }
    return ret;
}

function antigram (decimal) {
    var tri = decimal.toString(3).split("");
    var ant = "";
    tri.forEach(function(el){
        switch (el) {
            case "0":
                ant += "0"
                break;
            case "1":
                ant += "2"
                break;
            case "2":
                ant += "1"
                break;
        }
    });
    return ant;
}

function trrev (decimal) {
    return parseInt(decimal.toString(3).split("").reverse().join(""), 3);
}

var dec2hog = function(num) {
    if (num == 0) return "ϟ";
    var als = abgd.s_hoggvas.substr(0, 65).split(" ");
    var flv = [];
    var slv = [];
    var tlv = [];
    for (i=1; i < 12; i++) {
        flv[i-1] = i;
        slv[i-1] = i * 12;
        tlv[i-1] = i * 144
    }
    var alv = flv.concat(slv, tlv);
    ///////////////////////////////////////////////
    var rest = 0, ret = "", arr = [];
    do {
        rest = Math.floor(num / (12**3));
        num = num % (12**3);
        var counter = num;
        for (i = alv.length-1; i >= 0; i--) {
            if (alv[i] <= counter) {
                ret += als[i];
                counter -= alv[i];
            }
        }
        arr.unshift(ret);
        num = rest;
        if (num > 0) {
            ret = "";
        }
    } while (rest > 0);
    return arr.length>1?arr.join("."):arr[0];
}

var hog2dec = function (hog) {
    if (hog == "ϟ") return 0;
    var als = abgd.s_hoggvas.substr(0, 65).split(" ");
    var flv = [];
    var slv = [];
    var tlv = [];
    for (i=1; i < 12; i++) {
        flv[i-1] = i;
        slv[i-1] = i * 12;
        tlv[i-1] = i * 144
    }
    var alv = flv.concat(slv, tlv);
    var grp = hog.split(".");
    var res = 0;
    for (i = grp.length-1; i >= 0; i--) { //this is the counter of power of twelve
        var ai = grp.length - i - 1;
        var dig = grp[i].split("");
        for (j = dig.length-1; j >= 0; j--) { //this is the counter of the digits in 3-groups
            var ndx = als.indexOf(dig[j]);
            if (ndx >= 0) {
                res += ((12**3)**ai) * alv[ndx];
            }
        }
    }
    return res;
}

var lethoggconv = function (str, SorT=true) {
    console.error("In LETHOGGCONV make separate runs for EO and II!")
    var ca = str.split(""),
        cy = abgd.c_hoggvas.split(" "),
        ho = abgd.s_hoggvas.split(" "),
        rt = [];
    if (!SorT) {
        ho = abgd.t_hoggvas.split(" ");
    }
    for (var i = 0; i < ca.length; i++){
        let pos = cy.indexOf(ca[i]);
        if (pos == -1) {
            if (ca[i] == " ") {
                rt[i] = " ";
            } else if (cy.indexOf(ca[i].toLowerCase()) != -1) {
                // console.log("Found: " + ca[i] + ho[cy.indexOf(ca[i].toLowerCase())])
                rt[i] = "⁝" + ho[cy.indexOf(ca[i].toLowerCase())];
            } else {
                rt[i] = "" + ca[i] + "";
            }
        } else {
            rt[i] = ho[pos];
        }
    }
    return rt.join("");
};

function hoggvgem (str){
    var ca = str.toLowerCase().split(""), //original
    cy = abgd.c_hoggvas.split(" "), //cyrillic
    va = abgd.v_hoggvas, //num. vals
    gem = 0, //gematria
    clean = "";

    for (var j=0; j < ca.length; j++) {
        let pos = cy.indexOf(ca[j]);
        if (pos != -1) {
            gem += va[pos];
            clean += ca[j];
        }
    }
    return [gem, clean];
};

var hoggletconv = function (str){
    var ca = str.split(""),
        ret = [],
        cy = abgd.s_hoggvas.split(" "),
        va = abgd.c_hoggvas.split(" ");
    for (var j=0; j < ca.length; j++) {
        let pos = cy.indexOf(ca[j]);
        if (pos == -1) {
            if (ca[j] == " "){
                ret[j] = " "
            } else {
                ret[j] = /*"<"*/ + ca[j]/* + ">"*/; //mark unknown symbols
            }
        } else {
            ret[j] = va[pos];
        }
    }
    return ret.join("");
};

function _NOW() {
    var ts = new Date().getTime();
    //console.log(ts);
    return ts;
}

function _DTS2WTS (timestamp) { //date-time stamp to waer time stamp
    //milliseconds from epoch (1/0/1970) to waer time
    //TODO: one day think how to SUBSTRACT 66 years correctly - waer epoch starts at 20/00/1904
    //x = mhpd * ts / mspd
    var milsecperday = 24*60*60*1000; //86400000
    var milhogperday = 33**3 * 33**2; //39135393
    var hogts = milhogperday * timestamp / milsecperday
    return dec2hog(Math.round(hogts)/*FUCK CORRECTNESS*/);
}

function _WTS2DTS (waerts) { //waer time stamp to date-time stamp
    //waer timestamp to milliseconds from epoch (1/0/1970)
    //TODO: one day think how to ADD 66 years correctly - waer epoch starts at 20/00/1904
    //x = mspd * waerts / mhpd
    var wts = hog2dec(waerts);
    var milsecperday = 24*60*60*1000; //86400000
    var milhogperday = 33**3 * 33**2; //39135393
    var ts = milsecperday * wts / milhogperday;
    return Math.round(ts); // FUCK CORRECTNESS TWICE!
}

function leapYear(year) {
    var result;
    if (year % 400 == 0) {
      result = true
    } else if (year % 100 == 0) {
      result = false
    } else if (year % 4 == 0) {
      result= true
    } else {
      result= false
    }
    return result;
}

function dayOfYear(ts){
    var now = new Date(ts);
    var start = new Date(now.getFullYear(), 0, 1);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
}

function dateDiff(strdA, strdB) {
    var a = new Date(strdA);
    var b = new Date(strdB);
    var diff = b - a;
    var oneDay = 1000 * 60 * 60 * 24;
    return  Math.floor(diff / oneDay);
}

function get20MarDayOfYear(ts) {
    var now = new Date(ts);
    var efuy = now.getYear()
    var nDays = (Date.UTC(efuy, 2, 20) - Date.UTC(efuy, 0, 1)) / 86400000;
    return nDays;
}

function waerDT(ts) {
    ts = ts || _NOW();
    edt = new Date (ts); var efuy = edt.getYear(), emon = edt.getMonth(), edat = edt.getDate();
    var sfuy = efuy;
    // if march, but not yet 20th
    if (dayOfYear(ts) < get20MarDayOfYear(ts))
        sfuy--
    var nDays = (Date.UTC(efuy, emon, edat) - Date.UTC(sfuy, 2, 20)) / 86400000;
    var wmon = Math.floor(nDays / 28);
    var wdag = nDays % 28;
    var secs = edt.getSeconds() + (60 * (edt.getMinutes() + (60 * edt.getHours())));
    var wtotsecs = secs * 35937 / 86400
    var whours = Math.floor(wtotsecs / 1089);
    var tmp0 = wtotsecs - whours * 1089;
    var wmins = Math.floor(tmp0 / 33);
    var wsecs = Math.floor(tmp0 - wmins * 33);
    //Year, Month, Day of Month, Day of Year, Hour, Minute, Second
    var time_array = [
        efuy-4,
        wmon,
        wdag,
        nDays,
        whours,
        wmins,
        wsecs,
    ];
    return time_array;
}

function uncipherWDT(wdt) {
    return waerDT(_WTS2DTS(wdt));
}

function waerizeWDTArray (time_array) {
    var ta = time_array.slice();
    var als = abgd.s_hoggvas.substr(0, 65).split(" ");
    var year=dec2hog(ta[0]),
        wmon=("ϟђYɭqʌpչ↷mϙIC".split(""))[ta[1]],
        wdag=ta[2],
        nDays=trigr_beautify((ta[3]).toString(3)),
        whours=als[ta[4]],
        wmins=als[ta[5]],
        wsecs=als[ta[6]];

    var teq = {eng: abgd.t_roots.split(" "), dec: abgd.t_vals.split(" "), sym: abgd.t_symbs.split(" ")};
    teq.eng.unshift("ʔ"); teq.dec.unshift("()"); teq.sym.unshift("☼");

    if (wdag != 0) {
        wdag = trigr_beautify(parseInt(teq.dec[wdag]).toString(3));
    } else {
        wdag = teq.dec[wdag];
    }
    return [year, wmon, wdag, nDays, whours, wmins, wsecs];
}
