<?php


namespace App\Http\traits;


trait upload_image
{
    public function upload($file,$folder_name,$type = 'one'){
        $valid_extensions = ['png','jpg','jpeg','gif'];
        if($type == 'one') {
            if (in_array($file->getClientOriginalExtension(), $valid_extensions)) {
                $name = time().rand(0,9999999999999). '_image.' . $file->getClientOriginalExtension();
                $file->move(public_path('images/' . $folder_name), $name);
                return $name;
            } else {
                return false;
            }
        }
    }

    public function uploadPdf($file,$folder_name,$type = 'one'){
        $valid_extensions = ['pdf'];
        if($type == 'one') {
            if (in_array($file->getClientOriginalExtension(), $valid_extensions)) {
                $name = time().rand(0,9999999999999). '_pdf.' . $file->getClientOriginalExtension();
                $file->move(public_path('pdfs/' . $folder_name), $name);
                return $name;
            } else {
                return false;
            }
        }
    }
}
