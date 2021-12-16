import {AudioStateType} from "../../assets/script/Framework/Audio/Enum/AudioStateType";
import {LanguageType} from "../../assets/script/Framework/Config/Enum/LanguageType";

/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-06-15 上午 11:04
 * @Version 1.0
 */
export default class EnumTest {

    getEnumValue(key: AudioStateType):string{
        switch (key){
            case AudioStateType.CLEAR_TO_REPLAY:
                return "檢測到該音樂正在撥放時,清除正在撥放的音樂,後重新播放該音樂"
            case AudioStateType.NOT_PLAYING:
                return "檢測到該音樂正在撥放時,不做任何事情"
            case AudioStateType.SUPERIMPOSE:
                return "檢測到該音樂正在撥放時,將可疊加撥放"
        }
    }
}

test("列舉取值測試",()=>{
    const enumTest = new EnumTest();
    console.log(enumTest.getEnumValue(AudioStateType.NOT_PLAYING))
    console.log(LanguageType.CHINESE)
})