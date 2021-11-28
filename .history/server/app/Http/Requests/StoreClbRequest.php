<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

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
            'Logo' => 'required|max:45',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status' => false,
            'message' => 'Lỗi thêm dữ liệu',
            'detail' => $validator->errors()
        ]));
    }

    public function messages()
    {
        return [
            'VietTat.required' => 'Tên đội bóng viết tắt không được bỏ trống!',
            'VietTat.unique' => 'Trùng tên viết tắt đội bóng!',
            'TenCLB.max' => 'Tên đội bóng không vượt quá 45 ký tự!',
        ];
    }
}