/**
	텍스트 폼의 값이 무효한 값인가?
	사용법 : if ( VC_inValidText(f.M_ID, "아이디") ) { return; }
 */
    var VC_inValidText = function(obj, objName) 
    {
        if ( obj.value.trim() == "" ) {
            alert(objName + "을(를) 입력해 주세요.   ");
            obj.focus();
            return true;
        } else {
            return false;
        }
    }
    
    /**
        텍스트의 길이가 주어진 최소 길이보다 작은가?
        사용법 : if ( VC_inValidLength(f.M_ID, 6, "아이디") ) { return; }
     */
    var VC_inValidLength = function(obj, minLength, objName) 
    {
        if ( obj.value.length < minLength ) {
            alert(objName + "은(는) " + minLength + "자 이상 이어야 합니다.   ");
            obj.focus();
            return true;
        } else {
            return false;
        }
    }
    
    /**
        텍스트의 길이가 주어진 길이와 같지 않은가?
        사용법 : if ( VC_notSameLength(f.a2, 13, "주민번호") ) { return false; }
     */
    var VC_notSameLength = function(obj, vLength, objName) 
    {
        if ( obj.value.length != vLength ) {
            alert(objName + "은(는) " + vLength + "자 이어야 합니다.   ");
            obj.focus();
            return true;
        } else {
            return false;
        }
    }
    
    /**
        두 텍스트 폼의 값이 같지 않은가?
        사용법 : if ( VC_notSameText(f.M_PWD, f.M_PWD2, "비밀번호") ) { return; }
     */
    var VC_notSameText = function(obj1, obj2, textName) 
    {
        if ( obj1.value != obj2.value ) {
            alert(textName + "가(이) 동일하지 않습니다.   ");
            return true;
        } else {
            return false;
        }
    }
    
    /**
        주어진 문자열이 숫자형식이 아닌가?
        사용법 : if ( VC_inValidNumber(f.MH_MEGA, "거래금액") ) { return; }
     */
    var VC_inValidNumber = function(obj, textName)
    {
        var target = obj.value;
        for ( var i=0; i<target.length; i++ ) {
            var aChar = target.substring(i, i+1);
            if ( aChar < "0" || aChar > "9" ) {
                alert(textName + "은(는) 숫자 형식이어야 합니다.   ");
                obj.focus();
                return true;
            }
        }
        return false;
    }
    
    /**
        주어진 문자열이 숫자형식인가?
        사용법 : VC_inValidNumber(f.MH_MEGA.value)
     */
    var VC_isNumber = function(target)
    {
        for ( var i=0; i<target.length; i++ ) {
            var aChar = target.substring(i, i+1);
            if ( aChar < "0" || aChar > "9" ) {
                return false;
            }
        }
        return true;
    }
    
    /**
    주어진 문자열이 숫자를 포함하는가?
    사용법 : if ( VC_isIncludeNumber(f.name, "이름") ) { return; }
    */
    var VC_isIncludeNumber = function(obj, textName)
    {
    var target = obj.value;
    for ( var i=0; i<target.length; i++ ) {
        var aChar = target.substring(i, i+1);
        if ( aChar >= "0" && aChar <= "9" ) {
            alert(textName + "에는 숫자를 입력하실 수 없습니다.   ");
            obj.focus();
            return true;
        }
    }
    return false;
    }
    
    /**
        주어진 문자열이 영문이 아닌가?
        사용법 : if ( VC_inValidAlpha(f._ID, 6, "아이디") ) { return; }
     */
    var VC_inValidAlpha = function(obj, textName)
    {
        var target = obj.value;
        for ( var i=0; i<target.length; i++ ) {
            var aChar = target.substring(i, i+1);
            if ( (aChar < "a" || aChar > "z") && (aChar < "A" || aChar > "Z") ) {
                alert(textName + "은(는) 영문 형식이어야 합니다.   ");
                obj.focus();
                return true;
            }
        }
        return false;
    }
    
    /**
        주어진 문자열이 영문인가?
        사용법 : if ( VC_isAlpha(f.MH_MEGA.value) ) { return; }
     */
    var VC_isAlpha = function(target)
    {
        for ( var i=0; i<target.length; i++ ) {
            var aChar = target.substring(i, i+1);
            if ( (aChar < "a" || aChar > "z") && (aChar < "A" || aChar > "Z") ) {
                return false;
            }
        }
        return true;
    }
    
    /**
        주어진 문자열이 영문과 숫자형식이 아닌가?
        사용법 : if ( VC_inValidAlpha(f.MH_MEGA, "거래금액") ) { return; }
     */
    var VC_inValidAlphaNumber = function(obj, textName)
    {
        var target = obj.value;
        for ( var i=0; i<target.length; i++ ) {
            var aChar = target.substring(i, i+1);
            if ( (aChar < "0" || aChar > "9") && (aChar < "a" || aChar > "z") && (aChar < "A" || aChar > "Z") ) {
                alert(textName + "은(는) 영문과 숫자 형식이어야 합니다.   ");
                obj.focus();
                return true;
            }
        }
        return false;
    }
    
    /**
    주어진 문자열이 한글형식이 아닌가?
    사용법 : if ( VC_inValidHangul(f.MH_MEGA, "이름") ) { return; }
    */
    var VC_inValidHangul = function(obj, textName)
    {
        var target = obj.value;
    /*	
        var pattern = "/[^가-힝ㄱ-ㅎㅏ-ㅣ]/gi";
        
        if (pattern.match(target)) {
            alert(textName + "은(는) 한글이어야 합니다.   ");
            obj.focus();
            return true;
        }
    */
        
        for ( var i=0; i<target.length; i++ ) {
            var aChar = target.substring(i, i+1);
            var aCode = aChar.charCodeAt(0);
    //		if( !((0x1100<=aCode && aCode<=0x11FF) || (0x3130<=aCode && aCode<=0x318F) || (0xAC00<=aCode && aCode<=0xD7A3) || aCode==0x20) ) {
            if( !((0xAC00<=aCode && aCode<=0xD7A3) || aCode==0x20) ) {
                alert(textName + "은(는) 한글이어야 합니다.   ");
                obj.focus();
                return true;
            }
        }
        
        return false;
    }
    
    /**
        주어진 라디오 버튼을 선택하지 않았는가?
        사용법 : if ( VC_isUnselectRadio(f.batAnswer, "항목") ) { return; }
     */
    var VC_isUnselectRadio = function(items, textName)
    {
        if (items.length == null) { //1개일때 처리
            items = new Array(items);
        }
        
        var isSelected = false;
        
        for ( var i=0; i<items.length; i++ ) {
            if ( items[i].checked ) {
                isSelected = true;
                break;
            }
        }
        
        if ( !isSelected ) {
            alert(textName + "을(를) 선택해 주세요.   ");
            return true;
        } else {
            return false;
        }
    }
    
    /**
        주어진 체크박스를 선택하지 않았는가?
        사용법1 : if ( VC_isUnCheckedSelect(f.checkbox, "항목") ) { return; }
        사용법2 : if ( VC_isUnCheckedSelect(f['selectbox[]'], "항목") ) { return; }	
     */
    var VC_isUnCheckedSelect = function(items, textName)
    {
        var isChecked = false;
        
        for ( var i=0; i<items.length; i++ ) {
            if ( items[i].checked ) {
                isChecked = true;
                break;
            }
        }
        
        if ( !isChecked ) {
            alert(textName + "을(를) 선택해 주세요.   ");
            return true;
        } else {
            return false;
        }
    }
    
    /**
        주어진 콤보박스를 선택하지 않았는가?
        사용법 : if ( VC_isUnselect(f.interest, "보험종류") ) return;
    */
    var VC_isUnselect = function(mySelect, selectName) { 
    
        var isSelected = false; 
        
        for( i=0; i<mySelect.options.length; i++ ) { 
            if( mySelect[i].selected ) { 
                if ( mySelect[i].value != '' ) {
                    isSelected = true;
                }
            } 
        } 
    
        if ( !isSelected ) {
            alert(selectName + "을(를) 선택해 주세요.   ");
            return true;
        } else {
            return false;
        }    
    }
    
    /**
        이메일 형식이 아닌가?
        사용법 : if ( VC_inValidNumber(f.MH_MEGA, "거래금액") ) { return; }
     */
    var VC_inValidEmail = function(obj)
    {
        var target = obj.value;
        if (target.indexOf("@", 0) < 2 || target.indexOf(".", 0) < 4 || target.length < 6 ) {
            alert("이메일 형식이 아닙니다.   ");
            obj.focus();		
            return true;
        }
        return false;
    }
    
    /**
    이메일 도메인 형식이 아닌가?
    사용법 : if ( VC_inValidEmailDomain(f.email2) ) { return; }
    */
    var VC_inValidEmailDomain = function(obj)
    {
    var target = obj.value;
    if (target.indexOf(".", 0) < 4 || target.length < 6 ) {
        alert("이메일 도메인 형식이 아닙니다.   ");
        obj.focus();		
        return true;
    }
    return false;
    }
    
    /**
        날짜 형식 여부 체크.
        사용법 : if ( VC_inValidDate(f.M_BIRTH, "생년월일") ) { return; }
     */
    var VC_inValidDate = function(obj, textName)
    {
        var target = obj.value;
        var df = /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    
        if ( !df.test(target) ) {
            alert(textName+"은(는) 날짜 형식이어야 합니다.   ");
            obj.focus();
            return true;
        }
        return false;
    }
    
    /**
    URL 형식 여부 체크.
    사용법 : if ( VC_inValidUrl(f.M_URL, "URL주소") ) { return; }
    */
    var VC_inValidUrl = function(obj, textName)
    {
        var target = obj.value;
        var df = /(?:(?:(https?|ftp|telnet):\/\/|[\s\t\r\n\[\]\`\<\>\"\'])((?:[\w$\-_\.+!*\'\(\),]|%[0-9a-f][0-9a-f])*\:(?:[\w$\-_\.+!*\'\(\),;\?&=]|%[0-9a-f][0-9a-f])+\@)?(?:((?:(?:[a-z0-9\-가-힣]+\.)+[a-z0-9\-]{2,})|(?:[\d]{1,3}\.){3}[\d]{1,3})|localhost)(?:\:([0-9]+))?((?:\/(?:[\w$\-_\.+!*\'\(\),;:@&=ㄱ-ㅎㅏ-ㅣ가-힣]|%[0-9a-f][0-9a-f])+)*)(?:\/([^\s\/\?\.:<>|#]*(?:\.[^\s\/\?:<>|#]+)*))?(\/?[\?;](?:[a-z0-9\-]+(?:=[^\s:&<>]*)?\&)*[a-z0-9\-]+(?:=[^\s:&<>]*)?)?(#[\w\-]+)?)/gmi;
            
        if ( !df.test(target) ) {
            alert(textName+"은(는) URL 형식이어야 합니다.   ");
            obj.focus();
            return true;
        }
        return false;
    }
    
    /**
        유효한 주민번호가 아닌가?
        사용법 : if ( VC_inValidJumin(f.a2.value) ) { return false; }
     */
    var VC_inValidJumin = function(jumin)
    {
        var tot = 0;
        var tot_end = 0;
        
        if ( jumin.length == 13 && VC_isNumber(jumin) ) {
            j1 = jumin.substring(0,1) * 1;
            j2 = jumin.substring(1,2) * 1;
            j3 = jumin.substring(2,3) * 1;
            j4 = jumin.substring(3,4) * 1;
            j5 = jumin.substring(4,5) * 1;
            j6 = jumin.substring(5,6) * 1;
            j7 = jumin.substring(6,7) * 1;
            j8 = jumin.substring(7,8) * 1;
            j9 = jumin.substring(8,9) * 1;
            j10 = jumin.substring(9,10) * 1;
            j11 = jumin.substring(10,11) * 1;
            j12 = jumin.substring(11,12) * 1;
            j13 = jumin.substring(12,13) * 1;
            
            tot = (j1 * 2) + (j2 * 3) + (j3 * 4) + (j4 * 5) + (j5 * 6) + (j6 * 7) + (j7 * 8) + (j8 * 9) + (j9 * 2) + (j10 * 3) + (j11 * 4) + (j12 * 5);
            tot_end = (tot % 11) + j13
        }
    
        if ( !( tot_end == 1 || tot_end == 11) ) {
            alert("잘못된 주민번호 입니다.   ");
            return true;	
        } else {
            return false;
        }
    }
    
    /**
        thisForm에 입력한 문자열의 길이가 maxLength와 같으면 nextForm으로 커서를 이동한다.
        사용법 : onkeyup="VC_goNextForm(this, document.frm.jumin2, 6);"
     */
    var VC_goNextForm = function(thisForm, nextForm, maxLength)
    {
        if ( thisForm.value.length >= maxLength ) {
            nextForm.focus();
        }
    }
    
    /**
        미성년자 인가?
        사용법 : if ( VC_isMinor(f.a2.value) ) { return false; }
     */
    var VC_isMinor = function(jumin)
    {
        var isMinor = false;
        
        if ( jumin.length >= 6 ) {
            var toDay = new Date();
            var toYear = parseInt(toDay.getYear(),10);
            var toMonth = parseInt(toDay.getMonth() + 1,10);
            var toDate = parseInt(toDay.getDate(),10);
            
            var prefixYear = '19';
            if ( f.jumin2.value.substring(0,1) == '3' || f.jumin2.value.substring(0,1) == '4' ) {
                prefixYear = '20';
            }
                    
            var bhYear = parseInt(prefixYear + jumin.substring(0,2),10);
            var bhMonth = parseInt(jumin.substring(2,4),10);
            var bhDate = parseInt(jumin.substring(4,6),10);
            
            var age = toYear - bhYear;
            
            if( age < 19 ) {
                isMinor = true;
            } else if( age == 19 ) {
                //태어난 달이 아직 안 지났다면 미성년자
                if(toMonth < bhMonth){
                    isMinor = true;
                }
                //태어난 달은 같지만 날짜가 아직 안 지났다면 
                else if((toMonth == bhMonth) && (toDate < bhDate)){
                    isMinor = true;
                }				
            }
        }
        
        if ( isMinor ) {
            alert("성인이 아닙니다.   ");
            return true;
        } else {
            return false;
        }
    }
    
    /**
        한글등의 문자열의 바이트 수를 반환.
        사용법 : var len = VC_getBytes(obj.value);
     */
    var VC_getBytes = function(str)
    {
        return(str.length +(escape(str) + '%u').match(/%u/g).length-1); 
    }
    
    /**
        주어진 문자열을 주어진 길이 까지 잘라서 반환.
        사용법 : var str = VC_cutMaxLength(obj.value, 60);
     */
    var VC_cutMaxLength = function(message, max)
    {
        var inte = 0; 
        var lcno = 0; 
        var msg = ""; 
        var msglen = message.length; 
    
        for (i=0; i<msglen; i++) { 
            var ch = message.charAt(i); 
            if (escape(ch).length > 4) { 
                inte = 2; 
            } else if (ch != '\r') { 
                inte = 1; 
            } 
            if ((lcno + inte) > max) { 
                break; 
            } 
            lcno += inte; 
             msg += ch; 
        } 
        return  msg; 
    }
    
    /**
        주어진 텍스트 박스의 최대길이 까지만 입력 받는다.
        사용법 : onkeyup="VC_checkContentLength(this, '거래금액', 1000, null)"
     */
    var VC_checkContentLength = function(obj, objName, maxLength, viewer) {
        var len = VC_getBytes(obj.value);
        
        if ( viewer != null ) {
            viewer.innerText = len;
        }
        
        if ( len > maxLength ) {
            alert(objName + "은(는) 최대 " + maxLength + "bytes 까지 등록할 수 있습니다.   ");
            obj.value = VC_cutMaxLength(obj.value, maxLength);
            return true;
        }
        
        return false;
    }
    
    /**
        처음과 마지막의 공백을 제거해 준다.(가운대 공백은 하나를 남기고 제거)
        사용법 : ex ) var str = "aaaa    ";   str.trim();
     */
    String.prototype.trim = function() {
      return this.replace(/(^\s*)|(\s*$)/gi, "");
    }
    
    /**
    주어진 나이가 제한범위 밖인가?
    사용법 : VC_inValidAgeLimit(f.age)
    */
    var VC_inValidAgeLimit = function(obj, limit_lower, limit_higher)
    {
    /*	
        if (obj) {
            if ( limit_lower != "" && limit_lower > "0") {
                var target = obj.value;
                if (Number(target) < Number(limit_lower) || Number(target) > Number(limit_higher)) {
                    alert(limit_lower+"세 ~ "+limit_higher+"세 사이만 신청 가능합니다.   ");
                    obj.focus();
                    return true;
                }
            }
        }
    */	
        
        return false;
    }
    
    /**
    성별이 여성인가?
    사용법 : VC_inValidFemale(f.sex)
    */
    var VC_inValidFemale = function(obj, ms_cate, ms_code)
    {
    /*
        if ( (ms_cate == "22" && ms_code != 'S00109561S' && ms_code != 'S00105893V' && ms_code != 'S00102236H' && ms_code != 'S00106199L' && ms_code != 'S00102379U' && ms_code != 'S00102479E' && ms_code != 'S00106349F' && ms_code != 'S00106201K' && ms_code != 'S00106327H' && ms_code != 'S00106339X' && ms_code != 'S00111256T' && ms_code != 'S00103423C') || (ms_cate == "12" && ms_code != 'S00132985U' && ms_code != 'S00126269W' && ms_code != 'S00131910M') ) {
            if (obj) {
                for(var i=0;i<obj.length;i++){
                    if(obj[i].selected == true){
                        target = obj[i].value;
                    }
        
                    if(obj[i].checked == true){
                        target = obj[i].value;
                    }
                }
            
                if (target.substring(0, 1) == "남") {
                        alert("여성만 신청 가능합니다.   ");
                        return true;
                }
            }
        }
    */
    
        return false;
    }
    
    /**
     * 주어진 문자열이 동일한가?
     * 사용법 : VC_SameText(f.value, 동일한문자자릿수) 
     * @param obj : element object
     * @param maxLength : 동일한문자 자릿수 
     */
    var VC_SameText = function (obj, maxLength){
        var ret ="";
        var val = obj.value;
        var k=0;
        for(var i=0; i <= val.length-maxLength; i++){
            k=0;
            for(j=1 ; j < maxLength; j++){
                if(val.charAt(i) == val.charAt(i+j)){
                    k++;
                }
            }		
            if ( k >= maxLength-1 ) {
                alert("동일한 문자가 "+maxLength+"개이상 반복됩니다.\n\n다시 입력해주세요.");
                obj.focus();
                return true;
            }
        }
        
        return false;
    }
    
    /**
    주어진 문자열에 금지어가 있는가?
    사용법 : VC_forbiddenText(f.MH_MEGA)
    */
    var VC_forbiddenText = function(p_text, objName)
    {
        arrList = new Array();
    
        arrList[arrList.length]  = "갈보";
        arrList[arrList.length]  = "강간";
        arrList[arrList.length]  = "개년";
        arrList[arrList.length]  = "개놈";
        arrList[arrList.length]  = "개뇬";
        arrList[arrList.length]  = "개보지";
        arrList[arrList.length]  = "개삽년";
        arrList[arrList.length]  = "개새끼";
        arrList[arrList.length]  = "개세이";
        arrList[arrList.length]  = "개쉐이";
        arrList[arrList.length]  = "개자식";
        arrList[arrList.length]  = "개자지";
        arrList[arrList.length]  = "개지랄";
        arrList[arrList.length]  = "그룹섹스";
        arrList[arrList.length]  = "까자";
        arrList[arrList.length]  = "꼬추";
        arrList[arrList.length]  = "노브라";
        arrList[arrList.length]  = "니미";
        arrList[arrList.length]  = "니미랄";
        arrList[arrList.length]  = "니미럴";
        arrList[arrList.length]  = "니애미";
        arrList[arrList.length]  = "니에미";
        arrList[arrList.length]  = "등신";
        arrList[arrList.length]  = "딸딸이";
        arrList[arrList.length]  = "또라이";
        arrList[arrList.length]  = "레즈비언";
        arrList[arrList.length]  = "멜섹";
        arrList[arrList.length]  = "몰카";
        arrList[arrList.length]  = "문섹";
        arrList[arrList.length]  = "미친넘";
        arrList[arrList.length]  = "미친년";
        arrList[arrList.length]  = "미친놈";
        arrList[arrList.length]  = "미친뇬";
        arrList[arrList.length]  = "번색";
        arrList[arrList.length]  = "번색";
        arrList[arrList.length]  = "번섹";
        arrList[arrList.length]  = "번섹";
        arrList[arrList.length]  = "번쌕";
        arrList[arrList.length]  = "병신";
        arrList[arrList.length]  = "본디지";
        arrList[arrList.length]  = "부랄";
        arrList[arrList.length]  = "부부교환";
        arrList[arrList.length]  = "불알";
        arrList[arrList.length]  = "빙신";
        arrList[arrList.length]  = "빠구리";
        arrList[arrList.length]  = "빠굴";
        arrList[arrList.length]  = "빠꾸리";
        arrList[arrList.length]  = "빡우리";
        arrList[arrList.length]  = "빡울";
        arrList[arrList.length]  = "뽀르노";
        arrList[arrList.length]  = "새꺄";
        arrList[arrList.length]  = "새끈";
        arrList[arrList.length]  = "새끈남";
        arrList[arrList.length]  = "새끈녀";
        arrList[arrList.length]  = "새끼";
        arrList[arrList.length]  = "색남";
        arrList[arrList.length]  = "색녀";
        arrList[arrList.length]  = "색녀";
        arrList[arrList.length]  = "색스";
        arrList[arrList.length]  = "색폰";
        arrList[arrList.length]  = "성인만화";
        arrList[arrList.length]  = "성인물";
        arrList[arrList.length]  = "성인소설";
        arrList[arrList.length]  = "성인엽기";
        arrList[arrList.length]  = "성인영화";
        arrList[arrList.length]  = "성인용";
        arrList[arrList.length]  = "성인용품";
        arrList[arrList.length]  = "성인잡지";
        arrList[arrList.length]  = "세꺄";
        arrList[arrList.length]  = "섹";
        arrList[arrList.length]  = "섹  스";
        arrList[arrList.length]  = "섹 스";
        arrList[arrList.length]  = "섹녀";
        arrList[arrList.length]  = "섹스";
        arrList[arrList.length]  = "섹스";
        arrList[arrList.length]  = "쉬팔";
        arrList[arrList.length]  = "쉬펄";
        arrList[arrList.length]  = "스발";
        arrList[arrList.length]  = "스와핑";
        arrList[arrList.length]  = "스와핑";
        arrList[arrList.length]  = "시발";
        arrList[arrList.length]  = "시벌";
        arrList[arrList.length]  = "시파";
        arrList[arrList.length]  = "시펄";
        arrList[arrList.length]  = "십팔금";
        arrList[arrList.length]  = "쌍넘";
        arrList[arrList.length]  = "쌍년";
        arrList[arrList.length]  = "쌍놈";
        arrList[arrList.length]  = "쌔";
        arrList[arrList.length]  = "쌔깐";
        arrList[arrList.length]  = "쌔끈";
        arrList[arrList.length]  = "쌕쓰";
        arrList[arrList.length]  = "쌕폰";
        arrList[arrList.length]  = "썅";
        arrList[arrList.length]  = "썅넘";
        arrList[arrList.length]  = "썅년";
        arrList[arrList.length]  = "썅놈";
        arrList[arrList.length]  = "썅놈";
        arrList[arrList.length]  = "쒸팔";
        arrList[arrList.length]  = "쒸펄";
        arrList[arrList.length]  = "쓰바";
        arrList[arrList.length]  = "씌팍";
        arrList[arrList.length]  = "씨바";
        arrList[arrList.length]  = "씨발";
        arrList[arrList.length]  = "씨발";
        arrList[arrList.length]  = "씨발";
        arrList[arrList.length]  = "씨발넘";
        arrList[arrList.length]  = "씨발년";
        arrList[arrList.length]  = "씨발놈";
        arrList[arrList.length]  = "씨발뇬";
        arrList[arrList.length]  = "씨방";
        arrList[arrList.length]  = "씨방새";
        arrList[arrList.length]  = "씨버럴";
        arrList[arrList.length]  = "씨벌";
        arrList[arrList.length]  = "씨보랄";
        arrList[arrList.length]  = "씨보럴";
        arrList[arrList.length]  = "씨부랄";
        arrList[arrList.length]  = "씨부럴";
        arrList[arrList.length]  = "씨부리";
        arrList[arrList.length]  = "씨불";
        arrList[arrList.length]  = "씨불";
        arrList[arrList.length]  = "씨브랄";
        arrList[arrList.length]  = "씨파";
        arrList[arrList.length]  = "씨파";
        arrList[arrList.length]  = "씨팍";
        arrList[arrList.length]  = "씨팔";
        arrList[arrList.length]  = "씨팔";
        arrList[arrList.length]  = "씨펄";
        arrList[arrList.length]  = "씹";
        arrList[arrList.length]  = "씹물";
        arrList[arrList.length]  = "씹보지";
        arrList[arrList.length]  = "씹새";
        arrList[arrList.length]  = "씹새끼";
        arrList[arrList.length]  = "씹색";
        arrList[arrList.length]  = "씹세";
        arrList[arrList.length]  = "씹세이";
        arrList[arrList.length]  = "씹쉐";
        arrList[arrList.length]  = "씹쉐이";
        arrList[arrList.length]  = "씹쌔";
        arrList[arrList.length]  = "씹쌔기";
        arrList[arrList.length]  = "씹자지";
        arrList[arrList.length]  = "씹창";
        arrList[arrList.length]  = "씹탱";
        arrList[arrList.length]  = "씹탱구리";
        arrList[arrList.length]  = "씹팔";
        arrList[arrList.length]  = "씹펄";
        arrList[arrList.length]  = "씹할";
        arrList[arrList.length]  = "야동";
        arrList[arrList.length]  = "야동";
        arrList[arrList.length]  = "야사";
        arrList[arrList.length]  = "야사";
        arrList[arrList.length]  = "야설";
        arrList[arrList.length]  = "야설";
        arrList[arrList.length]  = "야캠";
        arrList[arrList.length]  = "야캠";
        arrList[arrList.length]  = "야한";
        arrList[arrList.length]  = "야한동영상";
        arrList[arrList.length]  = "야한사이트";
        arrList[arrList.length]  = "야한사진";
        arrList[arrList.length]  = "에로";
        arrList[arrList.length]  = "에로";
        arrList[arrList.length]  = "오랄";
        arrList[arrList.length]  = "와레즈";
        arrList[arrList.length]  = "와레즈";
        arrList[arrList.length]  = "원조";
        arrList[arrList.length]  = "원조교재";
        arrList[arrList.length]  = "원조교제";
        arrList[arrList.length]  = "원조교제";
        arrList[arrList.length]  = "음란";
        arrList[arrList.length]  = "자위";
        arrList[arrList.length]  = "정품게임";
        arrList[arrList.length]  = "젖꼭지";
        arrList[arrList.length]  = "젖탱";
        arrList[arrList.length]  = "젖탱";
        arrList[arrList.length]  = "젖탱이";
        arrList[arrList.length]  = "젼나";
        arrList[arrList.length]  = "조까";
        arrList[arrList.length]  = "조까";
        arrList[arrList.length]  = "졸라";
        arrList[arrList.length]  = "좃";
        arrList[arrList.length]  = "좃나";
        arrList[arrList.length]  = "좃나게";
        arrList[arrList.length]  = "좆";
        arrList[arrList.length]  = "좆같";
        arrList[arrList.length]  = "좆꼴리";
        arrList[arrList.length]  = "좆나";
        arrList[arrList.length]  = "좆나게";
        arrList[arrList.length]  = "좆빠";
        arrList[arrList.length]  = "좇";
        arrList[arrList.length]  = "좇";
        arrList[arrList.length]  = "좇같";
        arrList[arrList.length]  = "좇꼴려";
        arrList[arrList.length]  = "좇꼴리";
        arrList[arrList.length]  = "좇빠";
        arrList[arrList.length]  = "지랄";
        arrList[arrList.length]  = "지랄";
        arrList[arrList.length]  = "지미랄";
        arrList[arrList.length]  = "체모";
        arrList[arrList.length]  = "캠색";
        arrList[arrList.length]  = "캠섹";
        arrList[arrList.length]  = "캠섹";
        arrList[arrList.length]  = "컴색";
        arrList[arrList.length]  = "컴색";
        arrList[arrList.length]  = "컴섹";
        arrList[arrList.length]  = "컴섹";
        arrList[arrList.length]  = "팬티";
        arrList[arrList.length]  = "페니스";
        arrList[arrList.length]  = "페니스";
        arrList[arrList.length]  = "페티쉬";
        arrList[arrList.length]  = "포르노";
        arrList[arrList.length]  = "포르노";
        arrList[arrList.length]  = "폰색";
        arrList[arrList.length]  = "폰색";
        arrList[arrList.length]  = "폰섹";
        arrList[arrList.length]  = "폰섹";
        arrList[arrList.length]  = "폰섹";
        arrList[arrList.length]  = "폰쌕";
        arrList[arrList.length]  = "헨타이";
        arrList[arrList.length]  = "호로새끼";
        arrList[arrList.length]  = "호빠";
        arrList[arrList.length]  = "호스테스바";
        arrList[arrList.length]  = "호스트바";
        arrList[arrList.length]  = "화상색";
        arrList[arrList.length]  = "화상섹";
        arrList[arrList.length]  = "자살";
        arrList[arrList.length]  = "음독";
        arrList[arrList.length]  = "청산가리";
        arrList[arrList.length]  = "청산가루";	
        arrList[arrList.length]  = "캐쉬스파이더";
        arrList[arrList.length]  = "목자르는동영상";
        arrList[arrList.length]  = "목자르는 동영상";
        arrList[arrList.length]="김선일동영상";
        arrList[arrList.length]="김선일 동영상";
        arrList[arrList.length]="참수";			
        arrList[arrList.length]="007섹스샵";
        arrList[arrList.length]="007섹스티브이";
        arrList[arrList.length]="007섹스티비";
        arrList[arrList.length]="009sex";
        arrList[arrList.length]="016섹스닷컴";
        arrList[arrList.length]="1004성인용품";
        arrList[arrList.length]="100boG";
        arrList[arrList.length]="100bozy";
        arrList[arrList.length]="10sextv";
        arrList[arrList.length]="10섹스티브이";
        arrList[arrList.length]="114성인용품";
        arrList[arrList.length]="18sex";
        arrList[arrList.length]="18sexTV";
        arrList[arrList.length]="18x";
        arrList[arrList.length]="21섹스넷";
        arrList[arrList.length]="24에로라이브";
        arrList[arrList.length]="25라이브섹스";
        arrList[arrList.length]="33sexymall";
        arrList[arrList.length]="365섹스웹";
        arrList[arrList.length]="365포르노";
        arrList[arrList.length]="365포르노테잎";
        arrList[arrList.length]="386섹시매거진";
        arrList[arrList.length]="3sextv";
        arrList[arrList.length]="4SEX";
        arrList[arrList.length]="4changamolca섹스코리아";
        arrList[arrList.length]="4kkasi";
        arrList[arrList.length]="588show";
        arrList[arrList.length]="588섹스코리아";
        arrList[arrList.length]="588섹스코리아성인방송";
        arrList[arrList.length]="588섹스티비";
        arrList[arrList.length]="588포르노";
        arrList[arrList.length]="5sexshop";
        arrList[arrList.length]="69Time";
        arrList[arrList.length]="69XY성인디렉토리";
        arrList[arrList.length]="69n69성인몰";
        arrList[arrList.length]="69sex";
        arrList[arrList.length]="69timepornsex";
        arrList[arrList.length]="69섹스코리아";
        arrList[arrList.length]="69클럽TV";
        arrList[arrList.length]="섹스코리아";
        arrList[arrList.length]="ADULTMANA";
        arrList[arrList.length]="AVmolca";
        arrList[arrList.length]="AV갤러리";
        arrList[arrList.length]="AV재팬";
        arrList[arrList.length]="AdultSearch";
        arrList[arrList.length]="AdultSexshop";
        arrList[arrList.length]="Adulthumor";
        arrList[arrList.length]="Adultzone";
        arrList[arrList.length]="Bojyty";
        arrList[arrList.length]="Bozicam";
        arrList[arrList.length]="GO588TV";
        arrList[arrList.length]="GO섹시클럽";
        arrList[arrList.length]="HOTZONE";
        arrList[arrList.length]="HardcorePorno";
        arrList[arrList.length]="IJSEX";
        arrList[arrList.length]="IJ라이브";
        arrList[arrList.length]="IJ생방송";
        arrList[arrList.length]="IJ에로쇼";
        arrList[arrList.length]="IJ특별코너";
        arrList[arrList.length]="Korea포르노";
        arrList[arrList.length]="MANABOZI";
        arrList[arrList.length]="MolcaPornoTV";
        arrList[arrList.length]="MolcaTV";
        arrList[arrList.length]="Molcanara";
        arrList[arrList.length]="Molcaparty";
        arrList[arrList.length]="Molca테이프";
        arrList[arrList.length]="Molca포르노섹스코리아";
        arrList[arrList.length]="Molca포르노소라가이드";
        arrList[arrList.length]="Molka섹스코리아";
        arrList[arrList.length]="Molka코리아섹스";
        arrList[arrList.length]="Mulyosex";
        arrList[arrList.length]="NEVER-SEX";
        arrList[arrList.length]="OIO성인용품";
        arrList[arrList.length]="OK성인용품";
        arrList[arrList.length]="OK섹스SHOW";
        arrList[arrList.length]="PORNOBOZI";
        arrList[arrList.length]="PORNO애니";
        arrList[arrList.length]="PleyboG";
        arrList[arrList.length]="Porno바다";
        arrList[arrList.length]="SEXBBS";
        arrList[arrList.length]="SEXEROS";
        arrList[arrList.length]="SEXJAPAN";
        arrList[arrList.length]="SEXMOLCA";
        arrList[arrList.length]="SEXPDS";
        arrList[arrList.length]="SEXWAREZ";
        arrList[arrList.length]="SEXYMAP";
        arrList[arrList.length]="SEXYX";
        arrList[arrList.length]="SEXY화상채팅";
        arrList[arrList.length]="SEX로리타";
        arrList[arrList.length]="SEX섹스코리아";
        arrList[arrList.length]="SOSSEX";
        arrList[arrList.length]="SexGoods";
        arrList[arrList.length]="SexPorno";
        arrList[arrList.length]="Sexpia";
        arrList[arrList.length]="Sexwal";
        arrList[arrList.length]="Sexyadong";
        arrList[arrList.length]="TV플레이보이";
        arrList[arrList.length]="X등급";
        arrList[arrList.length]="YASATV";
        arrList[arrList.length]="Yahanbozi";
        arrList[arrList.length]="adult";
        arrList[arrList.length]="adultlife";
        arrList[arrList.length]="adultvideo";
        arrList[arrList.length]="adultzon";
        arrList[arrList.length]="av섹스코리아";
        arrList[arrList.length]="awoodong";
        arrList[arrList.length]="backbojytv";
        arrList[arrList.length]="bbagury";
        arrList[arrList.length]="bestbozi";
        arrList[arrList.length]="binya";
        arrList[arrList.length]="byuntaesex";
        arrList[arrList.length]="carporno";
        arrList[arrList.length]="carsex";
        arrList[arrList.length]="condom";
        arrList[arrList.length]="cosex";
        arrList[arrList.length]="cosex.net";
        arrList[arrList.length]="damoimsex";
        arrList[arrList.length]="enterchannel";
        arrList[arrList.length]="ero69";
        arrList[arrList.length]="eroasia";
        arrList[arrList.length]="erocine";
        arrList[arrList.length]="erosasia";
        arrList[arrList.length]="erosian";
        arrList[arrList.length]="erostyle";
        arrList[arrList.length]="fetish";
        arrList[arrList.length]="fetish7";
        arrList[arrList.length]="fetishwoman";
        arrList[arrList.length]="gagasexy";
        arrList[arrList.length]="goadult";
        arrList[arrList.length]="gojasex";
        arrList[arrList.length]="hotbojy";
        arrList[arrList.length]="hotsex";
        arrList[arrList.length]="hotsexkorea";
        arrList[arrList.length]="ilovesex";
        arrList[arrList.length]="joungyang";
        arrList[arrList.length]="jungyang";
        arrList[arrList.length]="kgirlmolca";
        arrList[arrList.length]="kingsex";
        arrList[arrList.length]="ksex";
        arrList[arrList.length]="ksex.net";
        arrList[arrList.length]="kukikorea";
        arrList[arrList.length]="live10tv";
        arrList[arrList.length]="molca";
        arrList[arrList.length]="molca365";
        arrList[arrList.length]="molca588";
        arrList[arrList.length]="molcaCD";
        arrList[arrList.length]="molcaav";
        arrList[arrList.length]="molcasex";
        arrList[arrList.length]="molcasexnipon";
        arrList[arrList.length]="molca섹스";
        arrList[arrList.length]="molca섹스코리아";
        arrList[arrList.length]="molca포르노";
        arrList[arrList.length]="mrcondom";
        arrList[arrList.length]="noode";
        arrList[arrList.length]="nopants";
        arrList[arrList.length]="nudcouple";
        arrList[arrList.length]="nude";
        arrList[arrList.length]="nudlnude";
        arrList[arrList.length]="oiotv";
        arrList[arrList.length]="olotv섹스nipon";
        arrList[arrList.length]="oralsextv";
        arrList[arrList.length]="playboy";
        arrList[arrList.length]="porno";
        arrList[arrList.length]="porno-tape";
        arrList[arrList.length]="pornomana";
        arrList[arrList.length]="pornoplayboy";
        arrList[arrList.length]="pornsex";
        arrList[arrList.length]="runsex";
        arrList[arrList.length]="sex";
        arrList[arrList.length]="sex-sayclub";
        arrList[arrList.length]="sex123";
        arrList[arrList.length]="sex18";
        arrList[arrList.length]="sex1818";
        arrList[arrList.length]="sex4969";
        arrList[arrList.length]="sexTV";
        arrList[arrList.length]="sexboard";
        arrList[arrList.length]="sexbuin";
        arrList[arrList.length]="sexcorea";
        arrList[arrList.length]="sexhangame";
        arrList[arrList.length]="sexjj";
        arrList[arrList.length]="sexkorea";
        arrList[arrList.length]="sexkorea,net";
        arrList[arrList.length]="sexkorea.com";
        arrList[arrList.length]="sexkorea.net";
        arrList[arrList.length]="sexkorea21";
        arrList[arrList.length]="sexkoreasexkorea";
        arrList[arrList.length]="sexmaxx";
        arrList[arrList.length]="sexmolka";
        arrList[arrList.length]="sexmovie";
        arrList[arrList.length]="sexmusa";
        arrList[arrList.length]="sexnipon";
        arrList[arrList.length]="sexsexy";
        arrList[arrList.length]="sexwal.com";
        arrList[arrList.length]="sexwall";
        arrList[arrList.length]="sexwall.com";
        arrList[arrList.length]="sexxmolcatv";
        arrList[arrList.length]="sexy";
        arrList[arrList.length]="sexyclik";
        arrList[arrList.length]="sexyjapan";
        arrList[arrList.length]="sexynmall";
        arrList[arrList.length]="sexysoul";
        arrList[arrList.length]="tvbozi";
        arrList[arrList.length]="tv섹스코리아";
        arrList[arrList.length]="viva포르노";
        arrList[arrList.length]="warez섹스";
        arrList[arrList.length]="whoissex";
        arrList[arrList.length]="wonjosex";
        arrList[arrList.length]="worldsex";
        arrList[arrList.length]="www.porno-tape.com";
        arrList[arrList.length]="www.sex123.co.kr";
        arrList[arrList.length]="www.sexkorea.net";
        arrList[arrList.length]="www.sexwal.com";
        arrList[arrList.length]="www.sorasguide.com";
        arrList[arrList.length]="www.twistkim.com";
        arrList[arrList.length]="xxx";
        arrList[arrList.length]="yadong";
        arrList[arrList.length]="yadongclub";
        arrList[arrList.length]="yadongmolca";
        arrList[arrList.length]="yadong섹스코리아";
        arrList[arrList.length]="yagood";
        arrList[arrList.length]="yahanbamtv";
        arrList[arrList.length]="yahannom";
        arrList[arrList.length]="yasine";
        arrList[arrList.length]="yesmolca";
        arrList[arrList.length]="yessex";
        arrList[arrList.length]="youngsex";
        arrList[arrList.length]="쎅스";
        arrList[arrList.length]="쎅스코리아";
        arrList[arrList.length]="쎅시넷";
        arrList[arrList.length]="쎅콜닷컴";
        arrList[arrList.length]="쎅클럽";
        arrList[arrList.length]="가가가가섹스샵";
        arrList[arrList.length]="가가가섹스WAREZ";
        arrList[arrList.length]="가가성인섹스샵";
        arrList[arrList.length]="가가성인용품";
        arrList[arrList.length]="가가성인용품샵";
        arrList[arrList.length]="가가섹스";
        arrList[arrList.length]="가가섹스포르노";
        arrList[arrList.length]="가가섹스하러다가라";
        arrList[arrList.length]="가고파성인용품";
        arrList[arrList.length]="가나성인용품전문쇼핑몰";
        arrList[arrList.length]="가람섹스성인용품";
        arrList[arrList.length]="가마성인쇼핑몰";
        arrList[arrList.length]="가면성인용품쇼핑몰";
        arrList[arrList.length]="가보자성인용품";
        arrList[arrList.length]="가시나무성인용품";
        arrList[arrList.length]="가이드성인쇼핑몰";
        arrList[arrList.length]="가이드섹스";
        arrList[arrList.length]="가인코리아성인용품";
        arrList[arrList.length]="가자Molca섹스코리아";
        arrList[arrList.length]="가자러브샵";
        arrList[arrList.length]="가자미아리";
        arrList[arrList.length]="가자성인용품";
        arrList[arrList.length]="가자섹스";
        arrList[arrList.length]="가자섹스몰";
        arrList[arrList.length]="가자섹스자료실";
        arrList[arrList.length]="가자섹스코리아";
        arrList[arrList.length]="가정섹스전문점";
        arrList[arrList.length]="가지와오이성인용품";
        arrList[arrList.length]="가지와오이섹스샵";
        arrList[arrList.length]="강간";
        arrList[arrList.length]="강남카페섹스비디오테이프";
        arrList[arrList.length]="강쇠닷컴";
        arrList[arrList.length]="강한성인영화";
        arrList[arrList.length]="걸섹스코리아갤러리";
        arrList[arrList.length]="경고섹스포르노";
        arrList[arrList.length]="경마장가는길성인용품";
        arrList[arrList.length]="경아닷컴";
        arrList[arrList.length]="고69섹슈얼";
        arrList[arrList.length]="고공섹스";
        arrList[arrList.length]="고려섹시인포디렉토리";
        arrList[arrList.length]="고섹스588";
        arrList[arrList.length]="고섹스PORNO";
        arrList[arrList.length]="고에로TV";
        arrList[arrList.length]="고우섹스";
        arrList[arrList.length]="고우섹스성인용품점";
        arrList[arrList.length]="고자섹스";
        arrList[arrList.length]="고추짱";
        arrList[arrList.length]="고투에로";
        arrList[arrList.length]="고패티쉬";
        arrList[arrList.length]="고혈압야동";
        arrList[arrList.length]="공짜만화";
        arrList[arrList.length]="과부촌";
        arrList[arrList.length]="국제성인마트";
        arrList[arrList.length]="굿걸TV";
        arrList[arrList.length]="굿나잇TV";
        arrList[arrList.length]="굿나잇티브이";
        arrList[arrList.length]="굿섹스클럽";
        arrList[arrList.length]="그룹섹스";
        arrList[arrList.length]="근친상간";
        arrList[arrList.length]="글래머샵";
        arrList[arrList.length]="김마담성인쇼핑몰";
        arrList[arrList.length]="꼬추닷컴";
        arrList[arrList.length]="나고야섹스미드머니";
        arrList[arrList.length]="나나성인용품";
        arrList[arrList.length]="나우누리어른만화방";
        arrList[arrList.length]="나이스69";
        arrList[arrList.length]="나이스성인샵";
        arrList[arrList.length]="나조아성인몰";
        arrList[arrList.length]="나체";
        arrList[arrList.length]="남녀섹시속옷";
        arrList[arrList.length]="남녀자위기구";
        arrList[arrList.length]="남성단련용품";
        arrList[arrList.length]="남성자위기구";
        arrList[arrList.length]="네버섹스";
        arrList[arrList.length]="네비로스섹스샵";
        arrList[arrList.length]="노노티브이";
        arrList[arrList.length]="노브라TV";
        arrList[arrList.length]="노팬티브이";
        arrList[arrList.length]="논스톱러브성인유머";
        arrList[arrList.length]="누나몰카";
        arrList[arrList.length]="누두";
        arrList[arrList.length]="누드";
        arrList[arrList.length]="누드112";
        arrList[arrList.length]="누드119";
        arrList[arrList.length]="누드25시";
        arrList[arrList.length]="누드molcaTV";
        arrList[arrList.length]="누드갤러리";
        arrList[arrList.length]="누드다이어리";
        arrList[arrList.length]="누드모델";
        arrList[arrList.length]="누드모아";
        arrList[arrList.length]="누드몰카TV";
        arrList[arrList.length]="누드뮤직";
        arrList[arrList.length]="누드사진";
        arrList[arrList.length]="누드섹스";
        arrList[arrList.length]="누드쇼";
        arrList[arrList.length]="누드스케치";
        arrList[arrList.length]="누드집";
        arrList[arrList.length]="누드천사";
        arrList[arrList.length]="누드커플";
        arrList[arrList.length]="누드코리아";
        arrList[arrList.length]="누드클럽";
        arrList[arrList.length]="누드필름";
        arrList[arrList.length]="누드화보";
        arrList[arrList.length]="누들누드";
        arrList[arrList.length]="다보자성인영화관";
        arrList[arrList.length]="다음섹스";
        arrList[arrList.length]="다이섹스";
        arrList[arrList.length]="대박성인토탈몰";
        arrList[arrList.length]="더티섹스";
        arrList[arrList.length]="도쿄섹스";
        arrList[arrList.length]="도쿄섹스nipon";
        arrList[arrList.length]="동양최고성고전";
        arrList[arrList.length]="두두섹스";
        arrList[arrList.length]="뒷치기";
        arrList[arrList.length]="드림페티쉬";
        arrList[arrList.length]="등급보류성인영화관";
        arrList[arrList.length]="디지털섹스조선";
        arrList[arrList.length]="딸딸이";
        arrList[arrList.length]="떡걸";
        arrList[arrList.length]="떡치기";
        arrList[arrList.length]="라노비아섹스샵";
        arrList[arrList.length]="라이브10TV";
        arrList[arrList.length]="라이브스트립";
        arrList[arrList.length]="러브박사성인용품";
        arrList[arrList.length]="러브베드";
        arrList[arrList.length]="러브섹시클럽";
        arrList[arrList.length]="러브장";
        arrList[arrList.length]="러브젤";
        arrList[arrList.length]="러브하자성인용품";
        arrList[arrList.length]="러브호텔";
        arrList[arrList.length]="럭키성인몰";
        arrList[arrList.length]="레드섹스tv";
        arrList[arrList.length]="레이싱걸";
        arrList[arrList.length]="로리타";
        arrList[arrList.length]="로리타.";
        arrList[arrList.length]="롤리타";
        arrList[arrList.length]="류미오";
        arrList[arrList.length]="리얼섹스플레이";
        arrList[arrList.length]="리얼에로";
        arrList[arrList.length]="마나보지";
        arrList[arrList.length]="마니아섹스";
        arrList[arrList.length]="만화보지";
        arrList[arrList.length]="망가";
        arrList[arrList.length]="망가짱";
        arrList[arrList.length]="모노섹스";
        arrList[arrList.length]="모두모아성인용품";
        arrList[arrList.length]="모모TV";
        arrList[arrList.length]="몰래보기";
        arrList[arrList.length]="몰래카메라";
        arrList[arrList.length]="몰래캠코더";
        arrList[arrList.length]="몰카";
        arrList[arrList.length]="몰카365";
        arrList[arrList.length]="몰카588";
        arrList[arrList.length]="몰카tv";
        arrList[arrList.length]="무료망가";
        arrList[arrList.length]="무료몰카";
        arrList[arrList.length]="무료성인";
        arrList[arrList.length]="무료성인동영상";
        arrList[arrList.length]="무료성인만화";
        arrList[arrList.length]="무료성인방송";
        arrList[arrList.length]="무료성인사이트";
        arrList[arrList.length]="무료성인싸이트";
        arrList[arrList.length]="무료성인엽기";
        arrList[arrList.length]="무료성인영화";
        arrList[arrList.length]="무료성인정보";
        arrList[arrList.length]="무료섹스";
        arrList[arrList.length]="무료섹스동영상";
        arrList[arrList.length]="무료섹스사이트";
        arrList[arrList.length]="무료야동";
        arrList[arrList.length]="무료야설";
        arrList[arrList.length]="무료포르노";
        arrList[arrList.length]="무료포르노동영상";
        arrList[arrList.length]="무료헨타이";
        arrList[arrList.length]="무전망가";
        arrList[arrList.length]="미국뽀르노";
        arrList[arrList.length]="미국포르노";
        arrList[arrList.length]="미니스커트";
        arrList[arrList.length]="미란다성인섹스샵";
        arrList[arrList.length]="미소걸성인용품";
        arrList[arrList.length]="미소녀";
        arrList[arrList.length]="미소녀게임";
        arrList[arrList.length]="미소녀섹스가이드";
        arrList[arrList.length]="미스누드";
        arrList[arrList.length]="미스터콘돔";
        arrList[arrList.length]="미스토픽닷컴";
        arrList[arrList.length]="미스토픽성인용품점";
        arrList[arrList.length]="미시촌";
        arrList[arrList.length]="미쎄스터";
        arrList[arrList.length]="미아리";
        arrList[arrList.length]="미아리2000";
        arrList[arrList.length]="미아리588";
        arrList[arrList.length]="미아리tv";
        arrList[arrList.length]="미아리섹스하리";
        arrList[arrList.length]="미아리쇼";
        arrList[arrList.length]="미아리텍사스";
        arrList[arrList.length]="바나나TV";
        arrList[arrList.length]="바나나티비";
        arrList[arrList.length]="바이엔에로";
        arrList[arrList.length]="밝은세상성인용품";
        arrList[arrList.length]="벗기는고스톱";
        arrList[arrList.length]="베스트성인용품";
        arrList[arrList.length]="베이비아웃성인용품";
        arrList[arrList.length]="변태";
        arrList[arrList.length]="보스성인클럽";
        arrList[arrList.length]="보조기구";
        arrList[arrList.length]="보지나라";
        arrList[arrList.length]="보지마TV";
        arrList[arrList.length]="보지보지";
        arrList[arrList.length]="보지털";
        arrList[arrList.length]="부부나라";
        arrList[arrList.length]="부부섹스";
        arrList[arrList.length]="비너스성인용품";
        arrList[arrList.length]="빈야";
        arrList[arrList.length]="빈야성인";
        arrList[arrList.length]="빈야성인와레즈";
        arrList[arrList.length]="빠구리";
        arrList[arrList.length]="빨간티브이섹스";
        arrList[arrList.length]="뽀르노";
        arrList[arrList.length]="삐리넷";
        arrList[arrList.length]="사까시";
        arrList[arrList.length]="사라성인용품점";
        arrList[arrList.length]="사랑의침실테크닉";
        arrList[arrList.length]="사이버섹스";
        arrList[arrList.length]="사창가";
        arrList[arrList.length]="색스";
        arrList[arrList.length]="색스코리아";
        arrList[arrList.length]="서양동영상";
        arrList[arrList.length]="서양뽀르노";
        arrList[arrList.length]="성과섹스";
    //    arrList[arrList.length]="성기";
        arrList[arrList.length]="성보조기구"; 
        arrList[arrList.length]="성인그리고섹스";
        arrList[arrList.length]="성인무료동영상";
        arrList[arrList.length]="성인무료사이트";
        arrList[arrList.length]="성인무료영화";
        arrList[arrList.length]="성인무비";
        arrList[arrList.length]="성인물";
        arrList[arrList.length]="성인미스랭크";
        arrList[arrList.length]="성인미팅방";
        arrList[arrList.length]="성인방송국";
        arrList[arrList.length]="성인방송안내";
        arrList[arrList.length]="성인배우";
        arrList[arrList.length]="성인별곡";
        arrList[arrList.length]="성인비됴";
        arrList[arrList.length]="성인비디오";
        arrList[arrList.length]="성인사이트";
        arrList[arrList.length]="성인사이트소개";
        arrList[arrList.length]="성인사진";
        arrList[arrList.length]="성인상품";
        arrList[arrList.length]="성인생방송";
        arrList[arrList.length]="성인샵";
        arrList[arrList.length]="성인서적";
        arrList[arrList.length]="성인성교육스쿨";
        arrList[arrList.length]="성인섹스민국";
        arrList[arrList.length]="성인섹스코리아";
        arrList[arrList.length]="성인소녀경";
        arrList[arrList.length]="성인소라가이드";
        arrList[arrList.length]="성인소설";
        arrList[arrList.length]="성인쇼";
        arrList[arrList.length]="성인쇼핑";
        arrList[arrList.length]="성인쇼핑몰";
        arrList[arrList.length]="성인시트콤";
        arrList[arrList.length]="성인싸이트";
        arrList[arrList.length]="성인애니";
        arrList[arrList.length]="성인애니메이션";
        arrList[arrList.length]="성인야설";
        arrList[arrList.length]="성인야화";
        arrList[arrList.length]="성인에로무비";
        arrList[arrList.length]="성인에로영화";
        arrList[arrList.length]="성인엽기";
        arrList[arrList.length]="성인엽기damoim";
        arrList[arrList.length]="성인영상";
        arrList[arrList.length]="성인영화";
        arrList[arrList.length]="성인영화관";
        arrList[arrList.length]="성인영화나라";
        arrList[arrList.length]="성인영화방";
        arrList[arrList.length]="성인영화세상";
        arrList[arrList.length]="성인영화천국";
        arrList[arrList.length]="성인용CD";
        arrList[arrList.length]="성인용품";
        arrList[arrList.length]="성인용품도매센터";
        arrList[arrList.length]="성인용품에로존";
        arrList[arrList.length]="성인용품할인매장";
        arrList[arrList.length]="성인유머";
        arrList[arrList.length]="성인이미지";
        arrList[arrList.length]="성인인증&x=23";
        arrList[arrList.length]="성인인터넷방송";
        arrList[arrList.length]="성인일본";
        arrList[arrList.length]="성인자료";
        arrList[arrList.length]="성인자료실";
        arrList[arrList.length]="성인전용";
        arrList[arrList.length]="성인전용관";
        arrList[arrList.length]="성인전용정보";
        arrList[arrList.length]="성인정보";
        arrList[arrList.length]="성인채팅";
        arrList[arrList.length]="성인챗";
        arrList[arrList.length]="성인천국";
        arrList[arrList.length]="성인체위";
        arrList[arrList.length]="성인카툰";
        arrList[arrList.length]="성인컨텐츠";
        arrList[arrList.length]="성인클럽";
        arrList[arrList.length]="성인플래쉬";
        arrList[arrList.length]="성인플래시";
        arrList[arrList.length]="성인화상";
        arrList[arrList.length]="성인화상채팅";
        arrList[arrList.length]="성일플래쉬";
        arrList[arrList.length]="성잉영화";
        arrList[arrList.length]="성체위";
        arrList[arrList.length]="성클리닉";
        arrList[arrList.length]="성테크닉";
        arrList[arrList.length]="성폭행";
        arrList[arrList.length]="성행위";
        arrList[arrList.length]="세븐누드닷컴";
        arrList[arrList.length]="세븐섹시";
        arrList[arrList.length]="세희야동";
        arrList[arrList.length]="섹";
        arrList[arrList.length]="섹걸";
        arrList[arrList.length]="섹걸닷컴";
        arrList[arrList.length]="섹골닷컴";
        arrList[arrList.length]="섹마";
        arrList[arrList.length]="섹쉬";
        arrList[arrList.length]="섹쉬뱅크";
        arrList[arrList.length]="섹쉬썸머타임";
        arrList[arrList.length]="섹쉬엽기";
        arrList[arrList.length]="섹스";
        arrList[arrList.length]="섹스19";
        arrList[arrList.length]="섹스25시";
        arrList[arrList.length]="섹스2TV";
        arrList[arrList.length]="섹스588섹스";
        arrList[arrList.length]="섹스6mm";
        arrList[arrList.length]="섹스700";
        arrList[arrList.length]="섹스89";
        arrList[arrList.length]="섹스DC";
        arrList[arrList.length]="섹스Koreana";
        arrList[arrList.length]="섹스Molca섹스코리아";
        arrList[arrList.length]="섹스SHOW";
        arrList[arrList.length]="섹스TV";
        arrList[arrList.length]="섹스and포르노";
        arrList[arrList.length]="섹스damoim";
        arrList[arrList.length]="섹스daum";
        arrList[arrList.length]="섹스molca";
        arrList[arrList.length]="섹스molcaTV";
        arrList[arrList.length]="섹스molca코리아";
        arrList[arrList.length]="섹스molca코리아TV";
        arrList[arrList.length]="섹스molca포르노";
        arrList[arrList.length]="섹스molka";
        arrList[arrList.length]="섹스sayclub";
        arrList[arrList.length]="섹스warez";
        arrList[arrList.length]="섹스yadong";
        arrList[arrList.length]="섹스가이드";
        arrList[arrList.length]="섹스갤러리";
        arrList[arrList.length]="섹스게시판";
        arrList[arrList.length]="섹스고고";
        arrList[arrList.length]="섹스굿";
        arrList[arrList.length]="섹스나라";
        arrList[arrList.length]="섹스나라69";
        arrList[arrList.length]="섹스노예";
        arrList[arrList.length]="섹스다음";
        arrList[arrList.length]="섹스다크";
        arrList[arrList.length]="섹스닷컴";
        arrList[arrList.length]="섹스데이타100";
        arrList[arrList.length]="섹스도우미";
        arrList[arrList.length]="섹스동";
        arrList[arrList.length]="섹스동영상";
        arrList[arrList.length]="섹스드라마";
        arrList[arrList.length]="섹스라이브";
        arrList[arrList.length]="섹스라이브TV";
        arrList[arrList.length]="섹스로봇";
        arrList[arrList.length]="섹스리아";
        arrList[arrList.length]="섹스리얼";
        arrList[arrList.length]="섹스링크";
        arrList[arrList.length]="섹스마스터";
        arrList[arrList.length]="섹스만화";
        arrList[arrList.length]="섹스매거진";
        arrList[arrList.length]="섹스모델";
        arrList[arrList.length]="섹스모아TV";
        arrList[arrList.length]="섹스몰";
        arrList[arrList.length]="섹스몰카";
        arrList[arrList.length]="섹스무비";
        arrList[arrList.length]="섹스무사";
        arrList[arrList.length]="섹스뮤직";
        arrList[arrList.length]="섹스믹스";
        arrList[arrList.length]="섹스바부제펜";
        arrList[arrList.length]="섹스벨리";
        arrList[arrList.length]="섹스보드";
        arrList[arrList.length]="섹스보조기구";
        arrList[arrList.length]="섹스보조용품";
        arrList[arrList.length]="섹스부인";
        arrList[arrList.length]="섹스브라";
        arrList[arrList.length]="섹스비디오";
        arrList[arrList.length]="섹스비안";
        arrList[arrList.length]="섹스사랑";
        arrList[arrList.length]="섹스사이트";
        arrList[arrList.length]="섹스사진";
        arrList[arrList.length]="섹스살롱";
        arrList[arrList.length]="섹스샘플";
        arrList[arrList.length]="섹스샵";
        arrList[arrList.length]="섹스샵2080";
        arrList[arrList.length]="섹스샵21";
        arrList[arrList.length]="섹스서치";
        arrList[arrList.length]="섹스선데이";
        arrList[arrList.length]="섹스성인만화";
        arrList[arrList.length]="섹스셀카";
        arrList[arrList.length]="섹스소나타";
        arrList[arrList.length]="섹스소라가이드";
        arrList[arrList.length]="섹스소리";
        arrList[arrList.length]="섹스시네";
        arrList[arrList.length]="섹스심리";
        arrList[arrList.length]="섹스씬";
        arrList[arrList.length]="섹스아이디";
        arrList[arrList.length]="섹스알리바바";
        arrList[arrList.length]="섹스애니마나";
        arrList[arrList.length]="섹스앤샵";
        arrList[arrList.length]="섹스야다이즈";
        arrList[arrList.length]="섹스야동";
        arrList[arrList.length]="섹스야시네";
        arrList[arrList.length]="섹스야호";
        arrList[arrList.length]="섹스에니메이션";
        arrList[arrList.length]="섹스에로";
        arrList[arrList.length]="섹스에로스TV";
        arrList[arrList.length]="섹스에로시안";
        arrList[arrList.length]="섹스엔바이";
        arrList[arrList.length]="섹스엔샵";
        arrList[arrList.length]="섹스엠티비닷컴";
        arrList[arrList.length]="섹스영상";
        arrList[arrList.length]="섹스영화";
        arrList[arrList.length]="섹스와레즈";
        arrList[arrList.length]="섹스왈";
        arrList[arrList.length]="섹스용품";
        arrList[arrList.length]="섹스월";
        arrList[arrList.length]="섹스월드";
        arrList[arrList.length]="섹스웰";
        arrList[arrList.length]="섹스인형";
        arrList[arrList.length]="섹스일기";
        arrList[arrList.length]="섹스자료실";
        arrList[arrList.length]="섹스자세";
        arrList[arrList.length]="섹스자진";
        arrList[arrList.length]="섹스잡지";
        arrList[arrList.length]="섹스재팬만화";
        arrList[arrList.length]="섹스정보";
        arrList[arrList.length]="섹스제이제이";
        arrList[arrList.length]="섹스제팬";
        arrList[arrList.length]="섹스제펜";
        arrList[arrList.length]="섹스조선";
        arrList[arrList.length]="섹스조아";
        arrList[arrList.length]="섹스조인";
        arrList[arrList.length]="섹스지존";
        arrList[arrList.length]="섹스짱";
        arrList[arrList.length]="섹스찌찌닷콤";
        arrList[arrList.length]="섹스채널";
        arrList[arrList.length]="섹스챗79";
        arrList[arrList.length]="섹스천사";
        arrList[arrList.length]="섹스천하";
        arrList[arrList.length]="섹스체위";
        arrList[arrList.length]="섹스촌";
        arrList[arrList.length]="섹스캠프";
        arrList[arrList.length]="섹스코러스";
        arrList[arrList.length]="섹스코치";
        arrList[arrList.length]="섹스크림";
        arrList[arrList.length]="섹스클럽";
        arrList[arrList.length]="섹스킴";
        arrList[arrList.length]="섹스타임";
        arrList[arrList.length]="섹스타임69";
        arrList[arrList.length]="섹스테잎";
        arrList[arrList.length]="섹스테크닉";
        arrList[arrList.length]="섹스토이샵";
        arrList[arrList.length]="섹스토이코리아";
        arrList[arrList.length]="섹스투데이";
        arrList[arrList.length]="섹스트립";
        arrList[arrList.length]="섹스파일";
        arrList[arrList.length]="섹스파크";
        arrList[arrList.length]="섹스포르노";
        arrList[arrList.length]="섹스포르노molca";
        arrList[arrList.length]="섹스포르노샵";
        arrList[arrList.length]="섹스포르노트위스트김";
        arrList[arrList.length]="섹스포섹스티비";
        arrList[arrList.length]="섹스포유";
        arrList[arrList.length]="섹스포인트";
        arrList[arrList.length]="섹스포탈";
        arrList[arrList.length]="섹스프리덤";
        arrList[arrList.length]="섹스피아";
        arrList[arrList.length]="섹스하까";
        arrList[arrList.length]="섹스하네";
        arrList[arrList.length]="섹스하리";
        arrList[arrList.length]="섹스한국";
        arrList[arrList.length]="섹스해죠";
        arrList[arrList.length]="섹스헨타이";
        arrList[arrList.length]="섹스호빠";
        arrList[arrList.length]="섹스홀";
        arrList[arrList.length]="섹시";
        arrList[arrList.length]="섹시TV";
        arrList[arrList.length]="섹시wave";
        arrList[arrList.length]="섹시갤러리";
        arrList[arrList.length]="섹시걸";
        arrList[arrList.length]="섹시게이트";
        arrList[arrList.length]="섹시나라";
        arrList[arrList.length]="섹시나이트";
        arrList[arrList.length]="섹시누드";
        arrList[arrList.length]="섹시뉴스";
        arrList[arrList.length]="섹시맵";
        arrList[arrList.length]="섹시무비";
        arrList[arrList.length]="섹시사진";
        arrList[arrList.length]="섹시샵";
        arrList[arrList.length]="섹시성인용품";
        arrList[arrList.length]="섹시섹스코리아";
        arrList[arrList.length]="섹시스타";
        arrList[arrList.length]="섹시신문";
        arrList[arrList.length]="섹시씨엔엔";
        arrList[arrList.length]="섹시아이제이";
        arrList[arrList.length]="섹시에로닷컴";
        arrList[arrList.length]="섹시엔TV";
        arrList[arrList.length]="섹시엔몰";
        arrList[arrList.length]="섹시연예인";
        arrList[arrList.length]="섹시재팬";
        arrList[arrList.length]="섹시제팬";
        arrList[arrList.length]="섹시제펜";
        arrList[arrList.length]="섹시조선";
        arrList[arrList.length]="섹시존";
        arrList[arrList.length]="섹시짱";
        arrList[arrList.length]="섹시촌";
        arrList[arrList.length]="섹시코디";
        arrList[arrList.length]="섹시코리아";
        arrList[arrList.length]="섹시클럽";
        arrList[arrList.length]="섹시클릭";
        arrList[arrList.length]="섹시팅하자";
        arrList[arrList.length]="섹시팬티";
        arrList[arrList.length]="쇼우망가";
        arrList[arrList.length]="쇼킹동영상";
        arrList[arrList.length]="쇼킹섹스";
        arrList[arrList.length]="쇼킹섹스코리아";
        arrList[arrList.length]="쇼킹에로";
        arrList[arrList.length]="숙모보지";
        arrList[arrList.length]="스와핑";
        arrList[arrList.length]="실리콘하우스성인용품";
        arrList[arrList.length]="심야TV";
        arrList[arrList.length]="심한포르노";
        arrList[arrList.length]="싸죠";
        arrList[arrList.length]="싹쓰리닷컴";
        arrList[arrList.length]="쌕쌕이티비";
        arrList[arrList.length]="쌩molca";
        arrList[arrList.length]="쌩몰카";
        arrList[arrList.length]="쌩보지";
        arrList[arrList.length]="쌩보지쑈";
        arrList[arrList.length]="쌩쇼";
        arrList[arrList.length]="쌩쑈";
        arrList[arrList.length]="쌩포르노";
        arrList[arrList.length]="씨누드21";
        arrList[arrList.length]="씹";
        arrList[arrList.length]="아마걸포르노";
        arrList[arrList.length]="아색기가";
        arrList[arrList.length]="아이러브섹스";
        arrList[arrList.length]="아이러브에로스쿨";
        arrList[arrList.length]="아이섹스스타";
        arrList[arrList.length]="아이제이섹스";
        arrList[arrList.length]="아일러브섹스티비";
        arrList[arrList.length]="알몸";
        arrList[arrList.length]="애로";
        arrList[arrList.length]="애로영화";
        arrList[arrList.length]="애마부인";
        arrList[arrList.length]="애자매";
        arrList[arrList.length]="야게임";
        arrList[arrList.length]="야게임즈닷넷";
        arrList[arrList.length]="야겜";
        arrList[arrList.length]="야동";
        arrList[arrList.length]="야동게시판";
        arrList[arrList.length]="야사";
        arrList[arrList.length]="야설";
        arrList[arrList.length]="야설공작소";
        arrList[arrList.length]="야설신화";
        arrList[arrList.length]="야설의문";
        arrList[arrList.length]="야시";
        arrList[arrList.length]="야시25TV";
        arrList[arrList.length]="야시MTV";
        arrList[arrList.length]="야시molca";
        arrList[arrList.length]="야시걸";
        arrList[arrList.length]="야시꾸리";
        arrList[arrList.length]="야시네";
        arrList[arrList.length]="야시녀";
        arrList[arrList.length]="야시랭크";
        arrList[arrList.length]="야시룸";
        arrList[arrList.length]="야시시";
        arrList[arrList.length]="야시캠";
        arrList[arrList.length]="야시코리아";
        arrList[arrList.length]="야애니";
        arrList[arrList.length]="야오이";
        arrList[arrList.length]="야하네";
        arrList[arrList.length]="야하다";
        arrList[arrList.length]="야한";
        arrList[arrList.length]="야한거";
        arrList[arrList.length]="야한걸";
        arrList[arrList.length]="야한것";
        arrList[arrList.length]="야한게임";
        arrList[arrList.length]="야한그림";
        arrList[arrList.length]="야한놈";
        arrList[arrList.length]="야한놈SEX";
        arrList[arrList.length]="야한누드";
        arrList[arrList.length]="야한동영상";
        arrList[arrList.length]="야한만화";
        arrList[arrList.length]="야한밤";
        arrList[arrList.length]="야한밤TV";
        arrList[arrList.length]="야한밤티브이";
        arrList[arrList.length]="야한사이트";
        arrList[arrList.length]="야한사진";
        arrList[arrList.length]="야한소설";
        arrList[arrList.length]="야한쇼닷컴";
        arrList[arrList.length]="야한영화";
        arrList[arrList.length]="야한이야기";
        arrList[arrList.length]="야한클럽";
        arrList[arrList.length]="야해";
        arrList[arrList.length]="야해요";
        arrList[arrList.length]="어덜트10000";
        arrList[arrList.length]="어덜트TV";
        arrList[arrList.length]="어덜트라이프";
        arrList[arrList.length]="어덜트랜드";
        arrList[arrList.length]="어덜트섹시성인영화관";
        arrList[arrList.length]="어덜트존";
        arrList[arrList.length]="어덜트천사TV";
        arrList[arrList.length]="어덜트코믹플러스";
        arrList[arrList.length]="어덜트탑10";
        arrList[arrList.length]="어덜트피아";
        arrList[arrList.length]="에로";
        arrList[arrList.length]="에로2002";
        arrList[arrList.length]="에로2030";
        arrList[arrList.length]="에로69";
        arrList[arrList.length]="에로69TV";
        arrList[arrList.length]="에로79";
        arrList[arrList.length]="에로걸즈";
        arrList[arrList.length]="에로게이트";
        arrList[arrList.length]="에로게임";
        arrList[arrList.length]="에로관";
        arrList[arrList.length]="에로극장";
        arrList[arrList.length]="에로니폰";
        arrList[arrList.length]="에로닷컴";
        arrList[arrList.length]="에로당";
        arrList[arrList.length]="에로데이";
        arrList[arrList.length]="에로동";
        arrList[arrList.length]="에로동영상";
        arrList[arrList.length]="에로디비";
        arrList[arrList.length]="에로무비";
        arrList[arrList.length]="에로물";
        arrList[arrList.length]="에로뮤직비디오";
        arrList[arrList.length]="에로바다";
        arrList[arrList.length]="에로방티브";
        arrList[arrList.length]="에로배우";
        arrList[arrList.length]="에로비";
        arrList[arrList.length]="에로비디오";
        arrList[arrList.length]="에로비안나이트";
        arrList[arrList.length]="에로샵";
        arrList[arrList.length]="에로세일";
        arrList[arrList.length]="에로섹스TV";
        arrList[arrList.length]="에로소라가이드";
        arrList[arrList.length]="에로쇼";
        arrList[arrList.length]="에로스";
        arrList[arrList.length]="에로스TV";
        arrList[arrList.length]="에로스데이";
        arrList[arrList.length]="에로스아시아";
        arrList[arrList.length]="에로스재팬";
        arrList[arrList.length]="에로스코리아";
        arrList[arrList.length]="에로스쿨";
        arrList[arrList.length]="에로스타";
        arrList[arrList.length]="에로스타일";
        arrList[arrList.length]="에로스페셜";
        arrList[arrList.length]="에로스포유";
        arrList[arrList.length]="에로시네마";
        arrList[arrList.length]="에로시안닷컴";
        arrList[arrList.length]="에로시티";
        arrList[arrList.length]="에로씨네";
        arrList[arrList.length]="에로아시아";
        arrList[arrList.length]="에로앤섹스";
        arrList[arrList.length]="에로야";
        arrList[arrList.length]="에로에스";
        arrList[arrList.length]="에로엔조이";
        arrList[arrList.length]="에로영화";
        arrList[arrList.length]="에로영화관";
        arrList[arrList.length]="에로올";
        arrList[arrList.length]="에로와이프";
        arrList[arrList.length]="에로이브";
        arrList[arrList.length]="에로존";
        arrList[arrList.length]="에로주";
        arrList[arrList.length]="에로촬영현장";
        arrList[arrList.length]="에로카";
        arrList[arrList.length]="에로클릭";
        arrList[arrList.length]="에로투유";
        arrList[arrList.length]="에로틱코리아";
        arrList[arrList.length]="에로파크";
        arrList[arrList.length]="에로패티시";
        arrList[arrList.length]="에로팬티";
        arrList[arrList.length]="에로플래쉬";
        arrList[arrList.length]="에로필름";
        arrList[arrList.length]="엑스노브라";
        arrList[arrList.length]="엑스모텔";
        arrList[arrList.length]="엑스투어덜트";
        arrList[arrList.length]="엔터채널";
        arrList[arrList.length]="여성성인용품";
        arrList[arrList.length]="여성자위기구";
        arrList[arrList.length]="여자보지";
        arrList[arrList.length]="연인사이성인샵";
        arrList[arrList.length]="엽기에로";
        arrList[arrList.length]="엽기적인섹스";
        arrList[arrList.length]="오나니";
        arrList[arrList.length]="오럴섹스";
        arrList[arrList.length]="오렌지야동";
        arrList[arrList.length]="오르가즘";
        arrList[arrList.length]="오마이에로";
        arrList[arrList.length]="오마이포르노";
        arrList[arrList.length]="오빠아파닷컴";
        arrList[arrList.length]="오사카섹스";
        arrList[arrList.length]="오섹스";
        arrList[arrList.length]="오섹스야";
        arrList[arrList.length]="오섹스테레비";
        arrList[arrList.length]="오예성인영화";
        arrList[arrList.length]="오이섹스";
        arrList[arrList.length]="오케이섹스";
        arrList[arrList.length]="오케이섹스TV";
        arrList[arrList.length]="오케이섹스molca포르노";
        arrList[arrList.length]="오케이섹스티비";
        arrList[arrList.length]="옷벗기기";
        arrList[arrList.length]="옷벗기기게임";
        arrList[arrList.length]="와우섹스";
        arrList[arrList.length]="왕가스";
        arrList[arrList.length]="용주골";
        arrList[arrList.length]="우라본섹스코리아";
        arrList[arrList.length]="울트라섹스제팬";
        arrList[arrList.length]="원조교제";
        arrList[arrList.length]="월드섹스";
        arrList[arrList.length]="웹섹스코리아";
        arrList[arrList.length]="음모";
        arrList[arrList.length]="이반성인용품몰";
        arrList[arrList.length]="이섹스";
        arrList[arrList.length]="인섹스69";
        arrList[arrList.length]="인터넷성인방송";
        arrList[arrList.length]="일본동영상";
        arrList[arrList.length]="일본망가";
        arrList[arrList.length]="일본미소녀";
        arrList[arrList.length]="일본뽀르노";
        arrList[arrList.length]="일본성인만화";
        arrList[arrList.length]="일본성인방송";
        arrList[arrList.length]="일본섹스";
        arrList[arrList.length]="일본포르노";
        arrList[arrList.length]="자위";
        arrList[arrList.length]="자위기구";
        arrList[arrList.length]="자위씬";
        arrList[arrList.length]="자위용품";
        arrList[arrList.length]="자위코리아";
        arrList[arrList.length]="자위행위";
        arrList[arrList.length]="재팬마나";
        arrList[arrList.length]="재팬만화";
        arrList[arrList.length]="재팬팬티";
        arrList[arrList.length]="정력강화용품";
        arrList[arrList.length]="정력팬티";
        arrList[arrList.length]="정력포탈";
        arrList[arrList.length]="정사씬모음";
        arrList[arrList.length]="정사채널";
        arrList[arrList.length]="정우성인용품전문점";
        arrList[arrList.length]="제이제이일본성인만화";
        arrList[arrList.length]="졸라야한닷컴";
        arrList[arrList.length]="좆물";
        arrList[arrList.length]="좋은생활성인용품";
        arrList[arrList.length]="찌찌";
        arrList[arrList.length]="채널레드TV";
        arrList[arrList.length]="체위";
        arrList[arrList.length]="체위동영상";
        arrList[arrList.length]="카섹스";
        arrList[arrList.length]="칼라섹스";
        arrList[arrList.length]="코리아성인가이드";
        arrList[arrList.length]="코리아섹스";
        arrList[arrList.length]="코리아섹스샵";
        arrList[arrList.length]="코리아스트립닷컴";
        arrList[arrList.length]="코리아엑스파일";
        arrList[arrList.length]="코리아포로노";
        arrList[arrList.length]="코리안걸스";
        arrList[arrList.length]="코섹스";
        arrList[arrList.length]="콘돔";
        arrList[arrList.length]="콘돔나라";
        arrList[arrList.length]="콘돔닥터";
        arrList[arrList.length]="콘돔몰";
        arrList[arrList.length]="콘돔예스";
        arrList[arrList.length]="콘돔피아";
        arrList[arrList.length]="쿨에로";
        arrList[arrList.length]="클럽AV스타";
        arrList[arrList.length]="클럽에로";
        arrList[arrList.length]="타부코리아";
        arrList[arrList.length]="토탈에로";
        arrList[arrList.length]="투앤투동거클럽";
        arrList[arrList.length]="트위스트김섹스코리아";
        arrList[arrList.length]="트위스트김소라가이드";
        arrList[arrList.length]="트위스트킴";
        arrList[arrList.length]="특수콘돔";
        arrList[arrList.length]="패션앤섹스";
        arrList[arrList.length]="패티쉬";
        arrList[arrList.length]="패티쉬우먼";
        arrList[arrList.length]="팬티캔디";
        arrList[arrList.length]="페로몬";
        arrList[arrList.length]="페티걸";
        arrList[arrList.length]="페티쉬";
        arrList[arrList.length]="페티쉬러브";
        arrList[arrList.length]="페티쉬매거진";
        arrList[arrList.length]="페티쉬우먼";
        arrList[arrList.length]="페티쉬즘";
        arrList[arrList.length]="페티쉬코리아";
        arrList[arrList.length]="페티시";
        arrList[arrList.length]="펜트하우스";
        arrList[arrList.length]="포로노";
        arrList[arrList.length]="포르노";
        arrList[arrList.length]="포르노24시";
        arrList[arrList.length]="포르노CINEMA";
        arrList[arrList.length]="포르노CNN";
        arrList[arrList.length]="포르노TV";
        arrList[arrList.length]="포르노bozi";
        arrList[arrList.length]="포르노molca티비";
        arrList[arrList.length]="포르노porno섹스코리아";
        arrList[arrList.length]="포르노worldcup";
        arrList[arrList.length]="포르노yadong";
        arrList[arrList.length]="포르노yadong섹스코리아";
        arrList[arrList.length]="포르노그라피";
        arrList[arrList.length]="포르노로";
        arrList[arrList.length]="포르노마나";
        arrList[arrList.length]="포르노만화";
        arrList[arrList.length]="포르노바다";
        arrList[arrList.length]="포르노사진";
        arrList[arrList.length]="포르노세상";
        arrList[arrList.length]="포르노섹스";
        arrList[arrList.length]="포르노섹스TV";
        arrList[arrList.length]="포르노섹스마나";
        arrList[arrList.length]="포르노섹스소라가이드";
        arrList[arrList.length]="포르노섹스코리아";
        arrList[arrList.length]="포르노섹스코리아소라가이드";
        arrList[arrList.length]="포르노섹스트위스트김";
        arrList[arrList.length]="포르노업";
        arrList[arrList.length]="포르노오팔팔";
        arrList[arrList.length]="포르노월드";
        arrList[arrList.length]="포르노집닷컴";
        arrList[arrList.length]="포르노천국";
        arrList[arrList.length]="포르노천사";
        arrList[arrList.length]="포르노테이프";
        arrList[arrList.length]="포르노테입";
        arrList[arrList.length]="포르노테잎";
        arrList[arrList.length]="포르노티비2580";
        arrList[arrList.length]="포르노파티";
        arrList[arrList.length]="포르노플레이보이";
        arrList[arrList.length]="포르로";
        arrList[arrList.length]="포카리섹스";
        arrList[arrList.length]="프리섹스샵";
        arrList[arrList.length]="프리섹스성인용품";
        arrList[arrList.length]="프리섹스코리아";
        arrList[arrList.length]="플레이보지";
        arrList[arrList.length]="플레이섹스";
        arrList[arrList.length]="피임기구";
        arrList[arrList.length]="피임용품";
        arrList[arrList.length]="핑크누드샵";
        arrList[arrList.length]="핑크섹스샵";
        arrList[arrList.length]="핑크코리아";
        arrList[arrList.length]="하드코어";
        arrList[arrList.length]="하이텔성인CLUB+19";
        arrList[arrList.length]="한글섹스사이트";
        arrList[arrList.length]="한글섹스코리아";
        arrList[arrList.length]="한스테이성인";
        arrList[arrList.length]="핫성인용품";
        arrList[arrList.length]="핫섹스";
        arrList[arrList.length]="핫섹스재팬";
        arrList[arrList.length]="핫섹스코리아";
        arrList[arrList.length]="핫포르노";
        arrList[arrList.length]="핫포르노섹스";
        arrList[arrList.length]="항문섹스";
        arrList[arrList.length]="해적,야동";
        arrList[arrList.length]="해피데이21성인용품";
        arrList[arrList.length]="해피투섹스";
        arrList[arrList.length]="향기콘돔";
        arrList[arrList.length]="헤라러브샵";
        arrList[arrList.length]="헨타이";
        arrList[arrList.length]="헨타이망가";
        arrList[arrList.length]="헬로우콘돔";
        arrList[arrList.length]="헬프섹스";
        arrList[arrList.length]="홈섹스TV";
        arrList[arrList.length]="화이트섹스라인";
        arrList[arrList.length]="후이즈섹스";
        arrList[arrList.length]="후장";
        arrList[arrList.length]="히든포르노";
        arrList[arrList.length]="잠지만화";
        arrList[arrList.length]="야설소라의가이드";
        arrList[arrList.length]="섹시녀사진";
        arrList[arrList.length]="잠지";
        arrList[arrList.length]="여성자위시대";
        arrList[arrList.length]="www.uh-oh.com";
        arrList[arrList.length]="bubunara";
        arrList[arrList.length]="공짜성인싸이트";
        arrList[arrList.length]="빈야와레즈";
        arrList[arrList.length]="코섹스넷";
        arrList[arrList.length]="강추야동";
        arrList[arrList.length]="케이섹스";
        arrList[arrList.length]="옆기성인동영상";
        arrList[arrList.length]="잠지털게임";
        arrList[arrList.length]="성인사이트메로나";
        arrList[arrList.length]="메로나섹스";
        arrList[arrList.length]="live10tv.com";
        arrList[arrList.length]="옷벗기기게임잡지";
        arrList[arrList.length]="도쿄마나";
        arrList[arrList.length]="www.sex2848.com";
        arrList[arrList.length]="게시판섹스";
        arrList[arrList.length]="소라의";
        arrList[arrList.length]="섹스존";
        arrList[arrList.length]="산소와레즈";
        arrList[arrList.length]="야한거벌끈벌끈";
        arrList[arrList.length]="섹시포유";
        arrList[arrList.length]="한국야동";
        arrList[arrList.length]="두두와레즈";
        arrList[arrList.length]="섹스망가";
        arrList[arrList.length]="야겜usa";
        arrList[arrList.length]="포노";
        arrList[arrList.length]="야한게임만남의장소";
        arrList[arrList.length]="조쟁이.잠지.키스";
        arrList[arrList.length]="잠지hentai";
        arrList[arrList.length]="여자옷벗기기게임";
        arrList[arrList.length]="센스디스";
        arrList[arrList.length]="센스디스무비";
        arrList[arrList.length]="하소연";
        arrList[arrList.length]="성현아누드";
        arrList[arrList.length]="성현아누드집";
        arrList[arrList.length]="에로키위";
        arrList[arrList.length]="은주조갯살";
        arrList[arrList.length]="누드모델가능해";
        arrList[arrList.length]="성인방송69채널";
        arrList[arrList.length]="야한놈엽기";
        arrList[arrList.length]="누드크로키";
        arrList[arrList.length]="광년이보지";
        arrList[arrList.length]="섹시동영상성생활";;
        arrList[arrList.length]="구멍야동";
        arrList[arrList.length]="야동자료실";
        arrList[arrList.length]="여고야동";
        arrList[arrList.length]="게시판sex";
        arrList[arrList.length]="동거사이트";
        arrList[arrList.length]="빡촌";
        arrList[arrList.length]="목욕탕몰카";
        arrList[arrList.length]="꼬추";
        arrList[arrList.length]="애무";
    
        for(i=0; i < arrList.length; i++) {
            var badWord = arrList[i];
          
            if(p_text.indexOf(badWord) != -1){
                alert(objName+"에 금지된 단어가 존재합니다("+badWord+").");
                return true;
            }
        }
    
        return false;
    }
    
    /**
        전화번호나 숫자인지
     */
    var VC_isTelWithNum = function(obj, objName) {
        var re1 = /^\d{2,3}-\d{3,4}-\d{4}$/;
        var re2 = /^\d*$/;
    
        if ( !(re1.test(obj.value) || re2.test(obj.value)) ) {
            alert(objName + " 형식이 틀립니다.   ");
            obj.focus();
            return true;
        } else {
            return false;
        }
    };