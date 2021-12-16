
  var State = {
    lzw_encode: function (s) {
        var dict = {};
        var data = (s + "").split("");
        var out = [];
        var currChar;
        var phrase = data[0];
        var code = 256;
        for (var i=1; i<data.length; i++) {
            currChar=data[i];
            if (dict[phrase + currChar] != null) {
                phrase += currChar;
            }
            else {
                out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
                dict[phrase + currChar] = code;
                code++;
                phrase=currChar;
            }
        }
        out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
        for (var i=0; i<out.length; i++) {
            out[i] = String.fromCharCode(out[i]);
        }
        return out.join("");
    },
    lzw_decode: function (s) {
        var dict = {};
        var data = (s + "").split("");
        var currChar = data[0];
        var oldPhrase = currChar;
        var out = [currChar];
        var code = 256;
        var phrase;
        for (var i=1; i<data.length; i++) {
            var currCode = data[i].charCodeAt(0);
            if (currCode < 256) {
                phrase = data[i];
            }
            else {
               phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
            }
            out.push(phrase);
            currChar = phrase.charAt(0);
            dict[code] = oldPhrase + currChar;
            code++;
            oldPhrase = phrase;
        }
        return out.join("");
    },
    Base64: {
      // private property
      _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

      // public method for encoding
      encode : function (input) {
          var output = "";
          var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
          var i = 0;

          input = State.Base64._utf8_encode(input);

          while (i < input.length) {

              chr1 = input.charCodeAt(i++);
              chr2 = input.charCodeAt(i++);
              chr3 = input.charCodeAt(i++);

              enc1 = chr1 >> 2;
              enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
              enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
              enc4 = chr3 & 63;

              if (isNaN(chr2)) {
                  enc3 = enc4 = 64;
              } else if (isNaN(chr3)) {
                  enc4 = 64;
              }

              output = output +
              State.Base64._keyStr.charAt(enc1) + State.Base64._keyStr.charAt(enc2) +
              State.Base64._keyStr.charAt(enc3) + State.Base64._keyStr.charAt(enc4);

          }

          return output;
      },

      // public method for decoding
      decode : function (input) {
          var output = "";
          var chr1, chr2, chr3;
          var enc1, enc2, enc3, enc4;
          var i = 0;

          input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

          while (i < input.length) {

              enc1 = State.Base64._keyStr.indexOf(input.charAt(i++));
              enc2 = State.Base64._keyStr.indexOf(input.charAt(i++));
              enc3 = State.Base64._keyStr.indexOf(input.charAt(i++));
              enc4 = State.Base64._keyStr.indexOf(input.charAt(i++));

              chr1 = (enc1 << 2) | (enc2 >> 4);
              chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
              chr3 = ((enc3 & 3) << 6) | enc4;

              output = output + String.fromCharCode(chr1);

              if (enc3 != 64) {
                  output = output + String.fromCharCode(chr2);
              }
              if (enc4 != 64) {
                  output = output + String.fromCharCode(chr3);
              }

          }

          output = State.Base64._utf8_decode(output);

          return output;

      },

      // private method for UTF-8 encoding
      _utf8_encode : function (string) {
          string = string.replace(/\r\n/g,"\n");
          var utftext = "";

          for (var n = 0; n < string.length; n++) {

              var c = string.charCodeAt(n);

              if (c < 128) {
                  utftext += String.fromCharCode(c);
              }
              else if((c > 127) && (c < 2048)) {
                  utftext += String.fromCharCode((c >> 6) | 192);
                  utftext += String.fromCharCode((c & 63) | 128);
              }
              else {
                  utftext += String.fromCharCode((c >> 12) | 224);
                  utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                  utftext += String.fromCharCode((c & 63) | 128);
              }

          }

          return utftext;
      },

      // private method for UTF-8 decoding
      _utf8_decode : function (utftext) {
          var string = "";
          var i = 0;
          var c = c1 = c2 = 0;

          while ( i < utftext.length ) {

              c = utftext.charCodeAt(i);

              if (c < 128) {
                  string += String.fromCharCode(c);
                  i++;
              }
              else if((c > 191) && (c < 224)) {
                  c2 = utftext.charCodeAt(i+1);
                  string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                  i += 2;
              }
              else {
                  c2 = utftext.charCodeAt(i+1);
                  c3 = utftext.charCodeAt(i+2);
                  string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                  i += 3;
              }

          }
          return string;
      }
    },
    saveGState: function () {
      var figures = [], figure;
      var cols = ['A', 'E', 'F', 'W'];
      for (var col in cols) {
        figures[col] = [];
      }
      var gskeys = [
        "GameIsOn", "globMoveNo", "gameDirection", "RotateHaShem",
        "qWhoStarts", "Goer", "GoerSaid", "Goal", "DrawWaer",
        "canTouchOther", "canJumpOver", "AirTowardsWater", "ObeyRand"
      ];
      $(".fig").each(function(i,o){
        //figures[figures.length]
        figure = {
          ParkingCell: $(o).data("ParkingCell"),
          LeftCell: $(o).data("LeftCell"),
          moveNo: $(o).data("moveNo"),
          parent: $(o).parent().attr('id'),
          class: $(o).attr('class'),
          id: $(o).attr('id'),
          style: $(o).attr('style')
        };
        for (var col in cols) {
          if ($(o).hasClass(col)) {
            figures[col][figures[col].length] = figure;
          }
        }
      });
      var globalState = {
        GameIsOn: Rules.GameIsOn,
        globMoveNo: globMoveNo,
        gameDirection: Rules.gameDirection,
        RotateHaShem: Rules.RotateHaShem,
        qWhoStarts: Rules.qWhoStarts,
        Goer: Rules.Goer,
        GoerSaid: Rules.GoerSaid,
        Goal: Rules.Goal,
        DrawWaer: Rules.DrawWaer,
        canTouchOther: Rules.canTouchOther,
        canJumpOver: Rules.canJumpOver,
        AirTowardsWater: Rules.AirTowardsWater,
        ObeyRand: Rules.ObeyRand
      };
      var protocol = $("#fpos").val();
      //  var data = {figures: figures, gstate: globalState, eaten: Eaten.Enochian, gskeys: gskeys, log: protocol};
      //  var jcdata = JSON.stringify(data);
      //  var cjdata = State.Base64.encode(State.lzw_encode(jcdata)); //State.Base64.encode
      var gsJ = State.Base64.encode(State.lzw_encode(JSON.stringify(globalState)));
      var figJA = State.Base64.encode(State.lzw_encode(JSON.stringify(figures.A)));
      var figJE = State.Base64.encode(State.lzw_encode(JSON.stringify(figures.E)));
      var figJF = State.Base64.encode(State.lzw_encode(JSON.stringify(figures.F)));
      var figJW = State.Base64.encode(State.lzw_encode(JSON.stringify(figures.W)));
      var othJ = State.Base64.encode(State.lzw_encode(JSON.stringify({eaten: Eaten, protocol: protocol})));

      $.cookie.raw = true;
      $.cookie('EC_GS', gsJ, {expires: 2147483647});
      $.cookie('EC_fA', figJA, {expires: 2147483647});
      $.cookie('EC_fE', figJE, {expires: 2147483647});
      $.cookie('EC_fF', figJF, {expires: 2147483647});
      $.cookie('EC_fW', figJW, {expires: 2147483647});
      $.cookie('EC_oth', othJ, {expires: 2147483647});

      console.table(document.cookie);

    },
    resetGState: function() {
    },

  };


var clock = function (d) {
    var cities = {
      Moscow: {long: 55.628, lat: 37.529}
    },  t, t2,
        d = new moment();

    var Hours = {
      Day: {},
      Night: {}
    };
    var Signs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"],
        Homes = ["♂", "♀", "☿", "☽", "☉", "☿", "c", "♂", "♃", "♄", "♄", "♃"],
        Xalts = ["☉", "☽", "☽", "♃", "♂", " ", "♄", "☿", "☽", "♂", "♀", "♀"],
        Dates = {
          "♈": [[2, 21], [3, 20],
                moment([d.year(), 3, 20]).diff(moment([d.year(), 2, 21]), "days")
                ],
          "♉": [[3, 21], [4, 20],
                moment([d.year(), 4, 20]).diff(moment([d.year(), 3, 21]), "days")
                ],
          "♊": [[4, 21], [5, 21],
                moment([d.year(), 5, 21]).diff(moment([d.year(), 4, 21]), "days")
                ],
          "♋": [[5, 22], [6, 22],
                moment([d.year(), 6, 22]).diff(moment([d.year(), 5, 22]), "days")
                ],
          "♌": [[6, 23], [7, 23],
                moment([d.year(), 7, 23]).diff(moment([d.year(), 6, 23]), "days")
                ],
          "♍": [[7, 24], [8, 23],
                moment([d.year(), 8, 23]).diff(moment([d.year(), 7, 24]), "days")
                ],
          "♎": [[8, 24], [9, 23],
                moment([d.year(), 9, 23]).diff(moment([d.year(), 8, 24]), "days")
                ],
          "♏": [[9, 24], [10, 22],
                moment([d.year(), 10, 22]).diff(moment([d.year(), 9, 24]), "days")
                ],
          "♐": [[10, 23], [11, 21],
                moment([d.year(), 11, 21]).diff(moment([d.year(), 10, 23]), "days")
                ],
          "♑": [[11, 22], [0, 20],
                moment([d.year()+1, 0, 22]).diff(moment([d.year(), 11, 22]), "days")
                ],
          "♒": [[0, 21], [1, 20],
                moment([d.year(), 1, 20]).diff(moment([d.year(), 0, 21]), "days")
                ],
          "♓": [[1, 21], [2, 20],
                moment([d.year(), 2, 20]).diff(moment([d.year(), 1, 21]), "days")
                ],
          CurrentSunDegree: "undefined"
        },
        Weekdays = ["☉", "☽", "♂", "☿", "♃", "♀", "♄"],
        Decans = ["☉", "♀", "☿", "☽", "♄", "♃", "♂"],
        Crosses = {
          Cardinal: [0, 3, 6, 9],
          Fixed: [1, 4, 7, 10],
          Mutable: [2, 5, 8, 11]
        },
        Elements = {
          Fire: [0, 4, 8],
          Earth: [1, 5, 9],
          Air: [2, 6, 10],
          Water: [3, 7, 11]
        };

    t = SC.getTimes(d, cities.Moscow.long, cities.Moscow.lat);
    t2 = SC.getTimes(d.add(1, "days"), cities.Moscow.long, cities.Moscow.lat);
    d.subtract(1, "days"); //we added, SC is mutable

    var daylength = moment(t.sunset).diff(moment(t.sunrise), "minutes"),
        nightlength = moment(t2.sunrise).diff(moment(t.sunset), "minutes"),
        dayhourlength = Math.floor(daylength / 12),
        nighthourlength = Math.floor(nightlength / 12),
        DOWRuler = Weekdays[d.day()],
        nowPlanet, PartOfDay, hourIndex,
        DecansTodaysOrder = Decans.rotate(Decans.indexOf(DOWRuler), false);

    Hours.Day = [];
    Hours.Night = [];

    for (var i=0; i<12;i++) {
      Hours.Day[i] = {
        planet: DecansTodaysOrder.rotate(i, false)[0],
        hour: moment(t.sunrise).add(dayhourlength*i, "minutes")
      };
      Hours.Night[i] = {
        planet: DecansTodaysOrder.rotate(i+12, false)[0],
        hour: moment(t.sunset).add(nighthourlength*i, "minutes")
      };
    }
    if (d.isAfter(t.sunset)) {
      PartOfDay = "Night";
    } else {
      PartOfDay = "Day";
    }
    for (var i=0;i<Hours[PartOfDay].length;i++) {
      hourIndex = i;
      if (i === Hours[PartOfDay].length-1) {
        if (d.isAfter(Hours[PartOfDay][i].hour)) {
          nowPlanet = Hours[PartOfDay][i].planet;
          break;
        }
      } else {
        if (d.isBetween(Hours[PartOfDay][i].hour, Hours[PartOfDay][i+1].hour)) {
          nowPlanet = Hours[PartOfDay][i].planet;
          break;
        }
      }
    }

    var secs = d.diff(moment(Hours[PartOfDay][hourIndex].hour), "seconds"),
        tol = (PartOfDay==="Day"?dayhourlength:nighthourlength),
        minutes = Math.floor(secs/tol);

    function toRoman(n) {
      var r = '',
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
      for (var i = 0; i < decimals.length; i++) {
        while (n >= decimals[i]) {
          r += roman[i];
          n -= decimals[i];
        }
      }
      return r;
    }

    var ty = d.year()-1904,
        wp = Math.floor(ty/22),
        fp = ty%22;
    wp = toRoman(wp);
    fp = toRoman(fp).toLowerCase();
    ty = wp+fp;

    Dates.CurrentSunDegree = function () {
      var csd;
      for (var i=0;i<12;i++) {
        if (d.isAfter([d.year(), Dates[Signs[i]][0][0], Dates[Signs[i]][0][1]])
                &
            d.isBefore([d.year()+(i===11?1:0), Dates[Signs[i]][1][0], Dates[Signs[i]][1][1]])) {
          var sm = Dates[Signs[i]][2]; //sign length
          var sign = Signs[i];
          var tmpdt = [d.year(), Dates[Signs[i]][0][0], Dates[Signs[i]][0][1]];
          var mo = d.diff(tmpdt, "days");
          csd = (mo*30)/sm;
          break;
          //sm = 30;
          //mo = x; x = mo*30/sm
        }
      }
      return csd+"° "+sign;
    };

    return {
      Year: ty,
      SunInDeg: Dates.CurrentSunDegree(),
      Time: d.hour()+":"+d.minute(),
      Minutes: minutes,
      HourRuler: nowPlanet,
      DayRuler: DOWRuler,
      Part: PartOfDay,
      Today:Hours
    };
  };



  Array.prototype.forEach = function (callback, thisArg) {

    var T, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Положим O равным результату вызова ToObject passing the |this| value as the argument.
    var O = Object(this);

    // 2. Положим lenValue равным результату вызова внутреннего метода Get объекта O с аргументом "length".
    // 3. Положим len равным ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. Если IsCallable(callback) равен false, выкинем исключение TypeError.
    // Смотрите: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    // 5. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Положим k равным 0
    k = 0;

    // 7. Пока k < len, будем повторять
    while (k < len) {

      var kValue;

      // a. Положим Pk равным ToString(k).
      //   Это неявное преобразование для левостороннего операнда в операторе in
      // b. Положим kPresent равным результату вызова внутреннего метода HasProperty объекта O с аргументом Pk.
      //   Этот шаг может быть объединён с шагом c
      // c. Если kPresent равен true, то
      if (k in O) {

        // i. Положим kValue равным результату вызова внутреннего метода Get объекта O с аргументом Pk.
        kValue = O[k];

        // ii. Вызовем внутренний метод Call функции callback с объектом T в качестве значения this и
        // списком аргументов, содержащим kValue, k и O.
        callback.call(T, kValue, k, O);
      }
      // d. Увеличим k на 1.
      k++;
    }
    // 8. Вернём undefined.
  };

  // VARIABLES SWAP IN JAVASCRIPT
  // b = [a, a = b][0];

/////////////////////////////////////////////////////////////////////////////
