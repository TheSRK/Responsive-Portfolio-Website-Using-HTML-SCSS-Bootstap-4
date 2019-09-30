$(document).ready(function() {
  $(".circularProgress").each(function(index, cProgress) {
    var progressPerntage = parseInt($(cProgress).attr("data-progress"));
    $(cProgress).css({
      "background-image":
        "conic-gradient(#dda908" +
        progressPerntage +
        "%,#0b090c " +
        progressPerntage +
        "%)"
        
    });
    
  });
});
