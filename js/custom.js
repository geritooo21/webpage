
$(document).on('click','.like',function(event){
  var a = $(this).children('.counter').first();
  if(!a.attr('hasBeenClicked')) {
    a.attr('hasBeenClicked' , true);
    $(this).addClass('disabled');
    var result = 1+parseInt(a.text());
    a.text(result);
  }
});

$("#add").click(
  function (event) {
    var commentinput = $(this).parent().parent().find('input').first();
    var comment = commentinput.val();
    if(comment!=='') {
      commentinput.parent().removeClass("has-error");
      $('.comment-box').first().prepend(firstpart+comment+secondpart);
      commentinput.val('');
    } else {
      commentinput.parent().addClass("has-error");
    }
  }
)

var firstpart = '<div class="col-sm-8">'+
'    <div class="panel panel-white post panel-shadow">'+
'        <div class="post-heading">'+
'            <div class="pull-left image">'+
'                <img src="img/woman.jpg" class="img-circle avatar" alt="user profile image">'+
'            </div>'+
'            <div class="pull-left meta">'+
'                <div class="title h5">'+
'                    <a href="#"><b>Me</b></a>'+
'                    made a post.'+
'                </div>'+
'                <h6 class="text-muted time">Just now</h6>'+
'            </div>'+
'        </div>'+
'        <div class="post-description">'+
'            <p>';
var secondpart = '</p>'+
'            <div class="stats">'+
'              <a class="btn btn-default stat-item like">'+
'                  <i class="fa fa-thumbs-up"></i><span class="counter">0</span>'+
'              </a>'+
'              <a class="btn btn-default stat-item like">'+
'                  <i class="fa fa-thumbs-down"></i><span class="counter">0</span>'+
'              </a>'+
'            </div>'+
'        </div>'+
'    </div>'+
'</div>';
