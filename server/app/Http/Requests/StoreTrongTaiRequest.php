<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class StoreTrongTaiRequest extends FormRequest
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
            'TenTT' => 'required|max:45',
            'NgaySinh' => 'required|max:45',
            'ViTri' => 'required|max:45',
            'AnhDaiDien' => 'required|max:45',
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
            'TenTT.required' => 'Chưa nhập tên Trọng Tài',
            'ViTri.required' => 'Chưa nhập Vị Trí',
            'NgaySinh.required' => 'Chưa nhập ngày sinh ',
            'AnhDaiDien.required' => 'Chưa cập nhập ảnh đại diện',
            // 'TenHLV.unique' => 'sđsad',
            
        ];
    }
}
