<?php

$curl = curl_init();
$channel =$_GET['c'];

$url="https://spapi.zee5.com/singlePlayback/getDetails?channel_id=$channel&device_id=o6MhX3zFu1lGHBKrR2uW000000000000&platform_name=desktop_web&translation=en&user_language=en,hi,mr&country=IN&state=BR&app_version=2.50.50&user_type=guest&check_parental_control=false&ppid=o6MhX3zFu1lGHBKrR2uW000000000000&version=12";

curl_setopt_array($curl, array(
  CURLOPT_URL => $url,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
  "x-access-token": " your_access_token ",  
  "Authorization": " your_auth_token "
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);
curl_close($curl);

$zx = json_decode($response, true);
$image= $zx["assetDetails"]['image_url'];
$img = str_replace('270x152', '1170x658', $image);
$title= $zx["assetDetails"]['title'];
$playit= $zx["keyOsDetails"]['video_token'];

header("Content-Type: application/json");
$errr= array("error" => "Put Here Only ZEE5-TV URL ,  Invalid Input " );
$err =json_encode($errr);


$apii = array("title" => $title, "image" => $img, "url" => $playit, "modified_by" => "Apna Tv");
$api =json_encode($apii, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);

header("Content-Type: application/json");
echo $api;
  
?>
