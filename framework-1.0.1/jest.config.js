module.exports = {
  preset: "ts-jest",         // 如果是 js 工程，則是 "jest"
  testEnvironment: 'jsdom',  // 測試代碼所運行的環境
  // verbose: true,          // 是否需要在測試時輸出詳細的測試情況
  rootDir: "./Test",         // 測試文件所在的目錄
  globals: {                 // 全局屬性。如果你的被測試的代碼中有使用、定義全局變量，那你應該在這裡定義全局屬性
	window: {},
	cc: {
        EventTarget:{
        },
        debug:{
            _resetDebugSetting:function (){
            },
            DebugMode:{
                INFO:1
            }
        }
    }
  }
};