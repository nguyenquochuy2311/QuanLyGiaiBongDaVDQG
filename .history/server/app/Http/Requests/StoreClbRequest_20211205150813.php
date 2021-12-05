<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreClbRequest extends FormRequest
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
            'VietTat' => 'required|unique:clb|max:10',
            'TenCLB' => 'required|unique:clb|max:45',
            'SanNha' => 'required|max:45',
            'TruSo' => 'required|max:45',
            'Logo' => 'required|image|mimes:jpeg,png,jpg|max:2048'
        ];
    }
}
