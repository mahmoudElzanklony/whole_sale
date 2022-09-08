<?php


namespace App\Keywords\Profile;


class ProfileNotesKeywords
{
    public static function get_keywords(){
        return [
          'note_you_write_it'=>trans('keywords.note_you_write_it_in_profile'),
          'note'=>trans('keywords.note'),
          'save'=>trans('keywords.save'),
          'delete_note'=>trans('keywords.delete'),
          'close'=>trans('keywords.close'),
        ];
    }
}
