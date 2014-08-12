<?php
        // create curl resource
        $ch = curl_init();

        // set url
        curl_setopt($ch, CURLOPT_URL, "http://openexchangerates.org/api/latest.json?app_id=7dab053898ed472db8102b47babeaab3");

        //return the transfer as a string
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        // $output contains the output string
        $output = curl_exec($ch);

        // close curl resource to free up system resources
        curl_close($ch);  

        header("Content-Type: application/json; charset=utf-8");
        
        echo $output;

?>