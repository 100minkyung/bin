$(document).ready(function(){
    for(let i = 0; i < 4; i++){
        $(".sec4 button").eq(i).click(function(){
            $(".sec4 button").removeClass("active")
            $(".sec4 button").eq(i).addClass("active")

            if($(".sec4 button").eq(0).hasClass("active")){
                $(".sec4 p").css({"font-style": "normal", "font-weight": "nromal"})
            }
            else if($(".sec4 button").eq(1).hasClass("active")){
                $(".sec4 p").css({"font-style": "italic", "font-weight": "normal"})
            }
            else if($(".sec4 button").eq(2).hasClass("active")){
                $(".sec4 p").css({"font-style": "normal", "font-weight": "bold"})
            }
            else if($(".sec4 button").eq(3).hasClass("active")){
                $(".sec4 p").css({"font-style": "italic", "font-weight": "bold"})
            }
        })
    }
})