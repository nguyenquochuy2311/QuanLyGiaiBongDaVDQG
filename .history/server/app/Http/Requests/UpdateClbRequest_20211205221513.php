<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;

class UpdateClbRequest extends FormRequest
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
            'VietTat' => 'required|max:10',
            Rule::unique('clb', 'TenCLB')->ignore($this->id),
            Rule::unique('clb', 'VietTat')->ignore($this->id),
            'SanNha' => 'required|max:45',
            'TruSo' => 'required|max:45',
            'Logo' => 'required|'
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048'
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
            'VietTat.required' => 'Tên đội bóng viết tắt không được bỏ trống!',
            'VietTat.unique' => 'Trùng tên đội bóng viết tắt khác!',
            'VietTat.max' => 'Tên đội bóng viết tắt không vượt quá 10 ký tự!',
            //Phần này để bổ sung sau
        ];
    }
}
