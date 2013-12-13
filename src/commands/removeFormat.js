/**
 * Created by liuyixi on 13-12-11.
 * document.execCommand("removeFormat") only clean the <i> <b>  style , not clean the style by class.
 *
 * so we need to extend this function can clean all styles.
 *
 * This js is extend by @Yixi.
 */

(function(wysihtml5){
    var REG_EXP = /wysiwyg-(.*?)$/g;
    wysihtml5.commands.removeFormat = {
        exec:function(composer, command){
            composer.doc.execCommand('RemoveFormat');
            wysihtml5.commands.formatInline.exec(composer,command,"span",null,REG_EXP);
            wysihtml5.commands.formatInline.exec(composer,command,"span",null,REG_EXP);
            wysihtml5.commands.formatBlock.exec(composer,"formatBlock",'span',null,REG_EXP);

        },
        state:function(){
            return false;
        }
    }

})(wysihtml5);
