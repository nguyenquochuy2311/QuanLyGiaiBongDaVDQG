<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class UpdateDoiBongRequest extends FormRequest
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
            'ten_doi_bong' => 'required|max:50|unique:doi_bongs,ten_doi_bong,'.\Request::get('id'),
            'mo_ta' => 'required'
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status' => false,
            'message' => 'Lỗi cập nhật dữ liệu',
            'detail' => $validator->errors()
        ]));
    }

    public function messages()
    {
        return [
            'ten_doi_bong.required' => 'Tên đội bóng không được bỏ trống!',
            'ten_doi_bong.unique' => 'Trùng tên đội bóng khác!',
            'ten_doi_bong.max' => 'Tên đội bóng không vượt quá 50 ký tự!',
            'mo_ta.required' => 'Mô tả không được bỏ trống!'
        ];
    }
}
