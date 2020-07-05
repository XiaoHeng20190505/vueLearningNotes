const presets = [
    ["@babel/env",{
        targets:{
            edge: "17",
            firefox: "60",
            chrome: "67",
            safari: "11.1"
        }
    }]
];
module.exports = { presets }
// presets这个单词不能写错，错了就无法运行了