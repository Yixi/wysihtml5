/**
 * Created by liuyixi on 13-12-10.
 * document.execCommand("fontName") will create either inline styles (firefox, chrome) or use font tags
 * we instead it will a css class
 *
 * This js is extend by Yixi
 *
 */


(function(wysihtml5){
    var REG_EXP = /wysiwyg-font-name-[0-9a-z]+/g;
    wysihtml5.commands.fontName = {
        exec:function(composer,command,value){
            return wysihtml5.commands.formatInline.exec(composer,command,"span","wysiwyg-font-name-" + value, REG_EXP);
        },

        state:function(composer,command,value){
            return wysihtml5.commands.formatInline.state(composer,command,"span","wysiwyg-font-name-"+ value, REG_EXP);
        }
    }

})(wysihtml5);