<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DoiBongStore extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'ten_doi_bong' => 'required|max:255|unique:doi_bongs',
            'mo_ta' => 'required'
        ];
    }
}