<?php
function getReturnStr($msg){    
    $msgArray = array();
    $messageArray = array();
    $messageArray['USERNAME'] =  'resdexrevamp1@yopmail.com';
    $messageArray['comment_id'] =  1223;
    $messageArray['comment'] =  $msg;
    $messageArray['comment_time'] =  '01 Apr 2015 3:24 PM';
    $msgArray['status'] = 'success';
    $msgArray['message'] = [$messageArray];
    $str = json_encode($msgArray);
    
    return $str;
}

$message =  $_POST['comment'] ;

$newmsg = getReturnStr($message);

header('Content-Type: application/json');
echo $newmsg; 

?>
    
